<script>
  let password = $state("");
  let checked = $state(false);
</script>

<label for="password">Enter the secret password:</label>
<input id="password" type="password" bind:value={password} />
<button
  on:click={() => (checked = true)}
  disabled={
    password != "AW96B6" && password != "Alohomora"
  }
>Check</button>

{#if checked && password === "AW96B6"}
  <p>Impossible!</p>
{:else if password === "Alohomora"}
  <p>Opening up!</p>
{/if}

<!-- <script>
  let password = $state("");
  let disabled = $state(true); // Initially disable the button
  let showMessage = $state(""); // To hold the message after clicking the button

  // Update disabled state based on password value
  $effect(() => {
    if (password === "AW96B6" || password === "Alohomora") {
      disabled = false; // Enable the button when password is correct
    } else {
      disabled = true; // Disable the button when password is incorrect
    }
  });

  // Handle the button click to show the corresponding message
  const handleClick = () => {
    if (password === "AW96B6") {
      showMessage = "Impossible!";
    } else if (password === "Alohomora") {
      showMessage = "Opening up!";
    }
  };
</script>

<label for="password">Enter the secret password:</label>
<input id="password" type="password" bind:value={password} />

<button {disabled} on:click={handleClick}>Submit</button>

{#if showMessage}
  <p>{showMessage}</p>
{/if} -->

<!-- <script>
  let password = $state("");
</script>

<label for="password">Enter the secret password:</label>
<input id="password" type="password" bind:value={password} />

{#if password === "AW96B6"}
  <p>Impossible!</p>
{:else if password === "Alohomora"}
  <p>Opening up!</p>
{/if} -->