import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import * as bookService from "./bookService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = async (c) => {
  return c.html(
    eta.render("books.eta", { books: await bookService.listBooks() }),
  );
};

const nameError = "The book name should be a string of at least 3 characters.";
const pageError = "The number of pages should be a number between 1 and 1000.";
const isbnError = "The ISBN should be a string of 13 characters.";

const bookValidator = z.object({
  name: z.string({ message: nameError }).min(3, { message: nameError }),
  pages: z.number({message: pageError}).min(1, {message: pageError}).max(1000, {message: pageError}),
  isbn: z.string({ message: isbnError }).length(13, { message: isbnError }),
});

const createBook = async (c) => {
  const body = await c.req.parseBody();
  //const validationResult = bookValidator.safeParse(body);
  const validationResult = bookValidator.safeParse({
    name: body.name,
    pages: Number(body.pages),  // Ensure pages are parsed as numbers
    isbn: body.isbn,
  });

  if(!validationResult.success) {
    return c.html(eta.render("books.eta", {
      ...body,
      books: await bookService.listBooks(),
      errors: validationResult.error.format(),
    }));
  }
  await bookService.createBook(body);
  return c.redirect("/books");
};

const showBook = async (c) => {
  const id = c.req.param("id");
  return c.html(
    eta.render("book.eta", { book: await bookService.getBook(id) }),
  );
};

const updateBook = async (c) => {
  const id = c.req.param("id");
  const body = await c.req.parseBody();
  await bookService.updateBook(id, body);
  return c.redirect(`/books/${id}`);
};

const deleteBook = async (c) => {
  const id = c.req.param("id");
  await bookService.deleteBook(id);
  return c.redirect("/books");
};

export { createBook, deleteBook, showForm, showBook, updateBook };
