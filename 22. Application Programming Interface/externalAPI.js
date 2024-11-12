import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

const fetchRandomJoke = async () => {
  // implement functionality here
  const response = await fetch('https://pokeapi.co/api/v2/type/1');
  const jsonData = await response.json();
  let pokemonArray = jsonData.pokemon;
  let pokemonName = [];
  //console.log(pokemonArray);
  pokemonArray.forEach(pokemon => {
    pokemonName.push(pokemon.pokemon.name);
    console.log(pokemon.pokemon.name);
  })
  return pokemonName;
};

app.get('/', async(c) => {
  const names = await fetchRandomJoke();
  //console.log(names);
  return c.text(names);
  
})


/* const fetchNamedays = async (day, month) => {
  const data = {
    "day": day,
    "month": month,
    "country": "fi"
  }

  const response = await fetch("https://nameday.abalin.net/api/V1/getdate", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(data)
  });
  //console.log(response.headers);
  console.log(response.body);
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData.nameday.fi;
};

app.get('/', async(c) => {
  const nameday = await fetchNamedays(1, 4);
  console.log(nameday);
  return c.json({nameday});
});
 */
Deno.serve(app.fetch);