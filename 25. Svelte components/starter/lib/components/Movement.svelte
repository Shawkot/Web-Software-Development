<script>
  import { useLocationStore } from "$lib/stores/location.svelte.js";

  const locationStore = useLocationStore();
</script>

<table>
  <tbody>
    <tr>
      <td></td>
      <td>
        <button on:click={() => locationStore.up()}>Up</button>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <button>Left</button>
      </td>
      <td>
        <button>Down</button>
      </td>
      <td>
        <button>Right</button>
      </td>
    </tr>
  </tbody>
</table>
