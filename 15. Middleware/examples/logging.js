import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.use("*", async (c, next) => {
  const start = Date.now();
  console.log('calling the handler...');
  await next();
  const ms = Date.now() - start;
  console.log(`${c.req.method} ${c.req.path} - ${ms}ms`);
});

app.get("/", (c) => {
  console.log('handler is being called!');
  return c.text("Hello middlewares!")
});

Deno.serve(app.fetch);