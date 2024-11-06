import { sql } from './database.js';

const createBook = async (book) => {
  await sql`INSERT INTO books (name, pages, isbn) VALUES (${book.name}, ${book.pages}, ${book.isbn})`;
};

const listBooks = async () => {
  return await sql`SELECT * FROM books`;
};

const getBook = async (id) => {
  const rows = await sql`SELECT * FROM books WHERE id = ${id}`;
  return rows?.[0] ?? {};
};

const updateBook = async (id, book) => {
  await sql`UPDATE books SET name = ${book.name}, pages = ${book.pages}, isbn = ${book.isbn} WHERE id = ${id}`;
};

const deleteBook = async (id) => {
  await sql`DELETE FROM books WHERE id = ${id}`;
};

export { createBook, deleteBook, getBook, listBooks, updateBook };
