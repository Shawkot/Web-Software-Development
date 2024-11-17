
<script>
  let wordList = $state([]);
  let text = $state('')
  const addWord = $derived(() => {
    wordList.push(text);
    text = ''
  })
</script>
<label for="item">Type in the item name:</label>
<input id="item" type="text" bind:value={text}/><br/>
<button onclick={addWord}>Add</button>

<p>Items:</p>

<ul>
  {#each wordList as word}
    <li>{word}</li>
  {/each}
</ul>
<p>The list has {wordList.length} {wordList.length === 1 ? 'item' : 'items'}.</p>