const handleRequest = (request) => {
  let message = "Not here.";
  const url = new URL(request.url);
  if (url.pathname === "/" && request.method === "GET") {
    message = "Hi there!";
  } else if (url.pathname === "/congrats" && request.method === "GET") {
    const params = url.searchParams;
    message = `Congrats, ${params.get("heroOfTheDay")}!`;
  } else if (request.method === "DIDNOT" && url.pathname === "/lol") {
    message = "What kind of tree fits in your hand? A palm tree.";
  }
  return new Response(message);
};
Deno.serve(handleRequest);
