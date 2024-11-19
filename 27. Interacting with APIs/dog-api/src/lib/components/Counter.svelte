<script>
  import { useCountStore } from "$lib/counter.svelte.js";
  let counter = useCountStore();
  //console.log(count);
</script>
<button onclick={() => counter.increment()}>increment</button>
<p>Count: {counter.count}</p>
<button onclick={() => counter.reset()}>Reset</button>