import * as bookApi from "$lib/http-actions/book-api.js";

let books = $state([]);

const initBooks = async () => {
  if (books.length > 0) return;
  books = await bookApi.getBooks();
}


const useBookStore = () => {
  return {
    get books() {
      return books;
    },
    addBook: (book) => {
      books = [...books, book]
    },
    deleteBook: async (id) => {
      let success = await bookApi.removeBook(id) // Sync the store with the API
      if (success) {
        books = books.filter((book) => book.id !== id);
      }
    }
      
  }
};


export { initBooks, useBookStore }; 