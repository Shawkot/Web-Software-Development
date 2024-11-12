<script>
  let count = $state({
    value: 0,
    note: 'single digits',
  });

  const incrementCount = () => {
    count.value++;
  }
  const decrementCount = () => {
    count.value--;
  }
</script>

<p>Count: {count.value} ({count.note})</p>
<button on:click={incrementCount}>Increment</button>
<button on:click={decrementCount}>Decrement</button>