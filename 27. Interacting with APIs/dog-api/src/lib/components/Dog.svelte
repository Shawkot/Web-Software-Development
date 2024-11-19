<script>
  let dog = $state("https://images.dog.ceo/breeds/pekinese/n02086079_10721.jpg");

  const fetchRandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    dog = data.message;
  };
</script>

<button onclick={fetchRandomDog}>Fetch new dog</button><br>
<br>
<img src={dog} alt="A dog" />