import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();
const secret = "secret";
const sessions = new Set();

app.get("/", (c) =>
  c.html(`<form method="POST" action="/authenticate">
  <input type="password" name="password" />
  <input type="submit" />
</form>`));

app.post("/authenticate", async (c) => {
  const body = await c.req.parseBody();
  if (
    body.password !== "very secret password" &&
    body.password !== "super secret password"
  ) {
    return c.text("Invalid password, you are not authenticated!", 401);
  }

  const sessionId = crypto.randomUUID();
  await setSignedCookie(c, "sessionId", sessionId, secret, {
    path: "/",
  });
  sessions.add(sessionId);

  if (body.password === "very secret password") {
    return c.redirect("/secrets/1");
  } else if (body.password === "super secret password") {
    return c.redirect("/secrets/2");
  }
});

app.get("/secrets/:id", async (c) => {
  const sessionId = await getSignedCookie(c, secret, "sessionId");
  if (!sessionId || !sessions.has(sessionId)) {
    return c.text("You have not authenticated!", 401);
  }

  return c.text(`Here's the secret ${c.req.param("id")}`);
});

Deno.serve(app.fetch);