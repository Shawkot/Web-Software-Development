import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as visits from './visits.js';

const app = new Hono();

app.get("/", async (c) => {
  await visits.incrementVisits();
  return c.text("Hello world!")
});

app.get('/visits', async (c) => {
  let noOfVisits = await visits.getVisits();
  return c.text(`Visit count: ${noOfVisits}`);
})

export default app;