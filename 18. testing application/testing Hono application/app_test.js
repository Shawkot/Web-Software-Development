import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import app from "./app.js";

Deno.test("POST / with 'Jane' as name returns 'Hello Jane!'", async () => {
  let formData = new FormData();
  formData.append("name", "Jane");

  let request = new Request("http://localhost/", {
    method: "POST",
    body: formData,
  });

  let res = await app.request(request);
  console.log(request);
  let body = await res.text();
  assertEquals(body, "Hello Jane!");
});

/* Deno.test("GET / returns 'Hello World!'", async () => {
  let request = new Request("http://localhost/");
  console.log(request);
  let res = await app.request(request);
  let body = await res.text();
  assertEquals(body, "Hello World!");
}); */

/* Deno.test("GET / returns 'Hello World!'", async () => {
  let res = await app.request("/");
  let body = await res.text();
  assertEquals(body, "Hello World!");
}); */