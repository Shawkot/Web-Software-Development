import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbacks.js";

const app = new Hono();

app.get('/feedbacks/:id', async (c) => {
  const feedback = await feedbacks.getFeedbacks(c.req.param('id'));
  return c.text(`Feedback ${c.req.param('id')}: ${feedback}`);
});
app.post('/feedbacks/:id', async (c) => {
  await feedbacks.incrementFeedbacks(c.req.param('id'));
  return c.text(`Feedback ${c.req.param('id')}: ${await feedbacks.getFeedbacks(c.req.param('id'))}`);
});

export default app;