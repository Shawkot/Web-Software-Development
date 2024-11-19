<script>
  import { fetchFinnishNameDay } from "../../http-actions/nameday-api";
  let nameday = $state("");

  let day = $state(1);
  let month = $state(1);

  const fetchNameDay = async () => {
    nameday = await fetchFinnishNameDay(day, month);
  };
    
</script>
<label for="day">Insert the day:</label>
<input type="text" name="day" placeholder="please insert the day" bind:value={day}><br>
<label for="month">Insert the month:</label>
<input type="text" name="month" placeholder="insert month" bind:value={month}><br>
<button onclick={fetchNameDay}>Query API</button>

<p>Nameday: {nameday}</p>