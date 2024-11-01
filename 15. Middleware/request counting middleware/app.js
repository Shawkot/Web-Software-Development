import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as middlewares from "./middlewares.js";

const app = new Hono();

app.use("*", middlewares.requestCountingMiddleware);

app.get("/", (c) => c.text("Hello World!"));
app.get("/zyx", (c) => c.text("More Hello World!"));

app.get("/x-request-count", (c) => {
  // Respond with the current count from the middleware
  return c.text(`${middlewares.requestCount}`);
});

export default app;