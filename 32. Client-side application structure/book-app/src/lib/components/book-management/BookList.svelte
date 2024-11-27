<script>
  import Book from "./Book.svelte";
  import { useBookStore } from "$lib/stores/books.svelte.js";

  let selectedBook = $state(null);

  const bookStore = useBookStore();

  const removeBook = async (id) => {
    //console.log(id);
    await bookStore.deleteBook(id);
  }
</script>

<h1>Books</h1>

<ul>
  {#each bookStore.books as book}
    <li>{book.name} 
      <button onclick={() => selectedBook = book}>View</button>
      <button onclick={() => removeBook(book.id)}>Delete</button>
    </li>
  {/each}
</ul>

{#if selectedBook}
  <Book book={selectedBook} />
  <button onclick={() => selectedBook = null}>Close</button>
{/if}