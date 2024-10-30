
const getFeedbacks = async (feedbackId) => {
  const kv = await Deno.openKv();
  const feedback = await kv.get(["feedback", String(feedbackId)]);
  return feedback.value ?? 0;
}

const incrementFeedbacks = async (feedbackId) => {
  let feedback = await getFeedbacks(feedbackId);
  feedback++;
  await setFeedbacks(feedbackId, feedback);
}

const setFeedbacks = async (feedbackId, feedback) => {
  const kv = await Deno.openKv();
  await kv.set(["feedback", String(feedbackId)], feedback);
}

export { getFeedbacks, incrementFeedbacks };