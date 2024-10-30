// Open the Deno KV store
const kv = await Deno.openKv();

// Define the key consisting of "feedback" and a unique identifier (e.g., "1")
const key = ["feedback", "1"];

// Define the feedback data you want to store
const feedbackData = { message: "Great service!", rating: 5 };

// Store the feedback data in the KV store
await kv.set(key, feedbackData);

console.log("Feedback saved!");


// Retrieve the feedback data using the key
const result = await kv.get(key);

if (result.value) {
  console.log("Feedback retrieved:", result.value);
} else {
  console.log("No feedback found for the given key.");
}

