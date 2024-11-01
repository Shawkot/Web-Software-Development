import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();
app.use("*", async (c, next) => {
  console.log("Middleware 1 - before");
  await next();
  console.log("Middleware 1 - after");
});

app.use("*", async (c, next) => {
  console.log("Middleware 2 - before");
  await next();
  console.log("Middleware 2 - after");
});

app.use("/secrets/*", async (c, next) => {
  console.log("Secret middleware - before");
  await next();
  console.log("Secret middleware - after");
});

/* app.use('*', async (c, next) => {
  if(c.req.path !== '/' || c.req.method !== 'GET') {
    return c.redirect('/');
  }
  await next();
}); */

app.get('/', (c) => c.text('Hello Middlewares!'));

Deno.serve(app.fetch);