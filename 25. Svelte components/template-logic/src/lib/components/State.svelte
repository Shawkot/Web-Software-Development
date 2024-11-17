<script>
  let items = $state([]);

  const addItem = () => {
    items.push(items.length + 1);
  }
  let total = $derived(items.reduce((t,n) => t + n, 0));
</script>

<button onclick={addItem}>Add item</button>

<p>Items:</p>
<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
<p>total = {total}</p>