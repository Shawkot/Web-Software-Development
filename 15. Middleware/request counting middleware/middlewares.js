// Initialize a global counter for requests
let requestCount = 0;

const requestCountingMiddleware = async (c, next) => {
  // Increment the count unless the request is a GET to /x-request-count
  if (!(c.req.method === "GET" && c.req.path === "/x-request-count")) {
    requestCount++;
  }
  // Proceed to the next middleware or route handler
  await next();
};

export { requestCountingMiddleware, requestCount };
