<script>
  import { onMount } from 'svelte';
  import { initBooks } from '$lib/stores/books.svelte.js';
  
  onMount(() => {
    initBooks();

    //add a class name ready-for-testing for testing purpose
    document.body.classList.add('ready-for-testing');
  });
</script>

<slot />