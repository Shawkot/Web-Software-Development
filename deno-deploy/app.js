import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as store from "./countService.js";

const app = new Hono();

app.get("/", async (c) => {
  if (c.req.query("store")) {
    await store.setStore(c.req.query("store"));
  }

  return c.text(`Store: ${await store.getStore()}`);
});

Deno.serve(app.fetch);

/* app.post("/", (c) => {
  countService.incrementCount();
  return c.text(countService.getCount());
}); */

