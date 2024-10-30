import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as feedbacks from "./feedbacks.js";
import * as courseController from "./courseController.js";

import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const app = new Hono();

app.get("/courses/:courseId/feedbacks/:feedbackId", async (c) => {
  const courseId = c.req.param("courseId");
  const feedbackId = c.req.param("feedbackId");
  const feedbackCount = await feedbacks.getFeedbackCount(courseId, feedbackId);
  return c.text(`Feedback ${feedbackId}: ${feedbackCount}`);
});

app.post("/courses/:courseId/feedbacks/:feedbackId", async (c) => {
  const courseId = c.req.param("courseId");
  const feedbackId = c.req.param("feedbackId");
  const feedbackStatus = getCookie(c, `feedback_${courseId}`);
  if(feedbackStatus) {
    return c.text("You have already given feedback for this course. Thank you!");
  }
  await feedbacks.incrementFeedbackCount(courseId, feedbackId);
  setCookie(c, `feedback_${courseId}`, "true", { path: '/'});
  return c.redirect(`/courses/${courseId}`);
});

app.get("/courses", courseController.showForm);
app.get("/courses/:id", courseController.showCourse);
app.post("/courses", courseController.createCourse);
app.post("/courses/:id/delete", courseController.deleteCourse);

export default app;