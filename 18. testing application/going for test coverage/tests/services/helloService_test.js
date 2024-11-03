import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import { getHello,setHello } from "../../services/helloService.js";

Deno.test("Calling 'getHello()' returns 'Oh, hello there!'", async () => {
  assertEquals("Oh, hello there!", getHello());
});

Deno.test('setHello should return nothing if no parameter passed!', () => {
  assertEquals(setHello(), undefined);
})

Deno.test('setHello should return the string if it has length less than 10', () => {
  setHello('shawkot')
  assertEquals(getHello('shawkot'), 'shawkot');
})

Deno.test('setHello should return shortened text with dots if the string is greater than 10 char', () => {
  setHello('md shawkot hossain')
  assertEquals(getHello(), 'md shawko...');
})
