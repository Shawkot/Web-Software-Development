import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const sessionCounts = new Map();
const app = new Hono();
const secret = "secret";

const getAndIncrementCount = (sessionId) => {
  console.log(sessionId);
  let count = sessionCounts.get(sessionId) ?? 0;
  console.log(count);
  count++;
  sessionCounts.set(sessionId, count);
  return count;
};

app.get("/", async (c) => {
  const sessionId = await getSignedCookie(c, secret, "sessionId") ??
    crypto.randomUUID();
  console.log(sessionId);
  await setSignedCookie(c, "sessionId", sessionId, secret, {
    path: "/",
  });
  const count = getAndIncrementCount(sessionId);
  return c.text(`Hello sessions! -- ${count}`);
});

Deno.serve(app.fetch);
/* import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();
const secret = "secret";

app.get("/", async (c) => {
  let count = await getSignedCookie(c, secret, "count") ?? 0;
  count = Number(count) + 1;
  await setSignedCookie(c, "count", `${count}`, secret, {
    path: "/",
  });
  return c.text(`Hello cookies! -- ${count}`);
});

Deno.serve(app.fetch); */