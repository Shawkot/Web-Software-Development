<script>
  let text = $state("");
  let disabled = $state(false);
  let selected = $state("");

  const resetVariables = () => {
    text = "";
    disabled = false;
    selected = "";
  };

  const keyUp = (event) => {
    if(event.key === "Enter") {
      resetVariables();
    }
  };
</script>

<input type="text" bind:value={text} {disabled} on:keyup={keyUp} />
Typing disabled <input type="checkbox" bind:checked={disabled} />
<button on:click={resetVariables}>Reset</button>

<p>
  Text: {text}, Selected: {selected}
</p>

<select bind:value={selected}>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>

<!-- <script>
  let text = $state("");
  let disabled = $state(false);
  let selected = $state("");
</script>

<input type="text" bind:value={text} {disabled} />
Typing disabled <input type="checkbox" bind:checked={disabled} />

<select bind:value={selected}>
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>

<p>
  Text: {text}, Selected: {selected}
</p> -->

<!-- <script>
  let text = $state("Wow!");
  let disabled = $state(false);
</script>

<input type="text" bind:value={text} disabled={disabled} />
Typing disabled <input type="checkbox" bind:checked={disabled} />

<p>
  Text: {text}
</p> -->
<!-- <script>
  let text = $state("");
</script>

<input type="text" bind:value={text} />

<p>
  Text: {text}
</p> -->

<!-- <script>
  let keystrokeCount = $state(0);
  let key = $state("");

  const showKey = (event) => {
    keystrokeCount++;
    key = event.key;
  };
</script>

<textarea on:keyup={showKey} />

<p>
  Last key pressed: {key}, total keystrokes: {keystrokeCount}
</p> -->

