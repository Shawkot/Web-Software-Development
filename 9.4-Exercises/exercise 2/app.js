import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
//import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as feedbacks from "./feedbacks.js";
import * as courseController from './courseController.js';


const app = new Hono();
//const eta = new Eta({ views: `${Deno.cwd()}/templates`});

/* app.get('/', (c) => {
  return c.html(
    eta.render('index.eta')
  )
}); */

app.get('/courses/:courseId/feedbacks/:id', async (c) => {
  const courseId = c.req.param('courseId');
  const feedbackId = c.req.param('id');
  const feedback = await feedbacks.getFeedbacks(courseId, feedbackId);
  return c.text(`Feedback ${c.req.param('id')}: ${feedback}`);
});
app.post('/courses/:courseId/feedbacks/:id', async (c) => {
  const courseId = c.req.param('courseId');
  const feedbackId = c.req.param('id');
  //console.log(courseId, feedbackId);
  await feedbacks.incrementFeedbacks(courseId, feedbackId);
  return c.redirect(`/courses/${courseId}`);
});

app.get('/courses', courseController.showForm);
app.get('/courses/:courseId', courseController.showCourses);

app.post('/courses', courseController.createCourses);
app.post('/courses/:courseId/delete', courseController.deleteCourse);

export default app;