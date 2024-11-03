import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";

import { echo } from "../app.js";

// implement tests here
Deno.test("echo function returns 'echoechoecho!'", () => {
    assertEquals(echo(), 'echoechoecho!')
})

Deno.test("echo function test should be failed", () => {
  assertEquals(echo(), 'echoechoecho')
})

Deno.test("echo function returns the same message as has been sent", () => {
    assertEquals(echo('hello world!'), 'hello world!');
})
