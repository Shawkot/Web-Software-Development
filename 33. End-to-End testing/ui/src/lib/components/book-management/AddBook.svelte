<script>
  import { createBook } from "$lib/http-actions/book-api";

  let name = $state('');
  let pages = $state('');
  let isbn = $state('');

  const addBook = async () => {
    const book = { name, pages, isbn };
    const response = await createBook(book);
    if (response.error) {
      console.log(response.error);
      return;
    }

    name = "";
    pages = "";
    isbn = "";

    console.log("Book added!");
  }
</script>

<h1>Add a book:</h1>

<label for="name">Book name:</label>
<input type="text" name="name" id="name" bind:value={name} /><br>
<label for="pages">Number of pages:</label>
<input type="number" name="pages" id="pages" bind:value={pages} /><br>
<label for="isbn">ISBN:</label>
<input type="text" name="isbn" id="isbn" bind:value={isbn} /><br>

<button onclick={addBook}>Add</button>