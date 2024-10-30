import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

/* const validator = z.string().email();

let result = validator.safeParse("This is not an email");
console.log(result);

result = validator.safeParse("this-is-an@email.com");
console.log(result);

const str = z.string();
let name = str.parse('shawkot');
console.log(name);

name = str.safeParse(123);
console.log(name); */
/* 
const validator = z.object({
  email: z.string().email(),
});

let result = validator.safeParse("this-is-an@email.com");
console.log(result);

result = validator.safeParse({ email: "this-is-an@email.com" });
console.log(result); */

/* const bookValidator = z.object({
  name: z.string(),
  pages: z.number().positive(),
  isbn: z.string(),
}); // fix

const personValidator = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
}); // fix

const courseValidator = z.object({
  name: z.string(),
  teacher: z.object(personValidator),
  book: z.object(bookValidator),
}); // fix

export { bookValidator, personValidator, courseValidator }; */

const bookValidator = z.object({
  name: z.string(),
  pages: z.coerce.number().min(1),
}); // fix

const personValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.coerce.number().min(0).max(120)
}); // fix

export { bookValidator, personValidator };