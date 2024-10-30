import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import * as courseService from './courseService.js';

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm =  async (c) => {
  return c.html(
    eta.render('courses.eta', { courses: await courseService.listCourses() })
  );
}

const courseValidator = z.object({
  course: z.string().min(4, {message: "The course name should be a string of at least 4 characters."})
});

const createCourses = async (c) => {
  const body = await c.req.parseBody();
  const validationResult = courseValidator.safeParse(body);
  if(!validationResult.success) {
    const errors = validationResult.error.format();
    const courses = await courseService.listCourses();
    //return c.text(`${errors.course._errors}`);
    console.log(validationResult.error.format());
    return c.html(
      eta.render('courses.eta', {submittedData: body, courses, errors})
    )
  }
  await courseService.setCourses(body);
  return c.redirect('/courses');
} 

const showCourses = async (c) => {
  const id = c.req.param('courseId');
  const course = await courseService.getCourse(id);
  return c.html(
    eta.render('course.eta', {course})
  )
}

const deleteCourse = async (c) => {
  const id = c.req.param('courseId');
  await courseService.removeCourse(id);
  return c.redirect('/courses');
}
export { showForm, createCourses, showCourses, deleteCourse };