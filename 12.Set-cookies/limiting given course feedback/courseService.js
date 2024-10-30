const createCourse = async (course) => {
  course.id = crypto.randomUUID();

  const kv = await Deno.openKv();
  await kv.set(["courses", course.id], course);
};

const listCourses = async () => {
  const kv = await Deno.openKv();
  const courseEntries = await kv.list({ prefix: ["courses"] });

  const courses = [];
  for await (const entry of courseEntries) {
    courses.push(entry.value);
  }

  return courses;
};

const getCourse = async (id, cookieId) => {
  const kv = await Deno.openKv();
  const course = await kv.get(["courses", id]);
  console.log(course.value);
  return course?.value ?? {};
};

const deleteCourse = async (id) => {
  const kv = await Deno.openKv();
  await kv.delete(["courses", id]);
};

export { createCourse, deleteCourse, getCourse, listCourses };