<script>
  let count = $state({
    value: 0,
  })
  const increment = () => {
    count.value++;
  }

  const reset = () => {
    count.value = 0;
  }

  const fetchJoke = async () => {
    let res = await fetch("https://simple-joke-api.deno.dev/random");
    return await res.json();
  }
</script>
{#if count.value === 1}
  {#await fetchJoke()}
    <p>Waiting for response...</p>
  {:then joke} 
    <p>{joke.setup}</p>
    <p>{joke.punchline}</p>
  {/await}
  <!-- <p>Click, clickiti click click click.</p>
{:else if count.value == 5}
  <p>I know I'll get tired of these clicking exercises.</p> -->
{/if}
<h1>Count: { count.value }</h1>
<button on:click={increment}>Increment</button>
<button on:click={reset}>Reset</button>