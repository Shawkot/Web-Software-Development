import { useBookStore } from "$lib/stores/books.svelte.js";

const getBooks = async () => {
  const response = await fetch('/api/books');
  return await response.json();
}

const createBook = async (book) => {
  const response = await fetch('/api/books', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });

  const data = await response.json();
  if(!data.error){
    const bookstore = useBookStore();
    bookstore.addBook(data);
  }
  
  return data;
}

const removeBook = async (id) => {
  const res = await fetch(`/api/books/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete book');
  return true;
}
export { getBooks, createBook, removeBook };