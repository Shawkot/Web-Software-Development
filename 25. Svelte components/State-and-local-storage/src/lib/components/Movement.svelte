<script>
  import { useLocationStore } from "$lib/stores/location.svelte.js";

  const locationStore = useLocationStore();
</script>

<table>
  <tbody>
    <tr>
      <td></td>
      <td>
        <button onclick={() => locationStore.up()}>Up</button>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <button onclick={() => locationStore.left()}>Left</button>
      </td>
      <td>
        <button onclick={() => locationStore.down()}>Down</button>
      </td>
      <td>
        <button onclick={() => locationStore.right()}>Right</button>
      </td>
    </tr>
  </tbody>
</table>