
const getFeedbacks = async (courseId, feedbackId) => {
  const kv = await Deno.openKv();
  const feedback = await kv.get(["feedback", String(courseId), String(feedbackId)]);
  return feedback.value ?? 0;
}

const incrementFeedbacks = async (courseId, feedbackId) => {
  let feedback = await getFeedbacks(courseId, feedbackId);
  feedback++;
  await setFeedbacks(courseId, feedbackId, feedback);
}

const setFeedbacks = async (courseId, feedbackId, feedback) => {
  const kv = await Deno.openKv();
  await kv.set(["feedback", String(courseId), String(feedbackId),], feedback);
}

export { getFeedbacks, incrementFeedbacks };