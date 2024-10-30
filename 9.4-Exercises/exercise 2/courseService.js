
const setCourses = async (course) => {
  //console.log(course);
  course.courseId = crypto.randomUUID();
  const kv = await Deno.openKv();
  await kv.set(["courses", course.courseId], course);
}

const listCourses = async () => {
  const kv = await Deno.openKv();
  const entries = kv.list({ prefix: ['courses'] });

  const courses = [];
  
  for await (const entry of entries) {
    courses.push(entry.value);
  }

  return courses;
  
}

const getCourse = async (id) => {
  const kv = await Deno.openKv();
  const course = await kv.get(['courses', id]);
  return course?.value ?? {}; 
}

const removeCourse = async (id) => {
  const kv = await Deno.openKv();
  await kv.delete(['courses', id]);
}
export { setCourses, listCourses, getCourse, removeCourse };