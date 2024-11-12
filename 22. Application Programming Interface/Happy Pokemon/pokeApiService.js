const getPokemonName = async (id) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
  );
  const data = await response.json();
  return data.name;
};

const getPokemonBaseHappiness = async (id) => {
  // TODO: implement
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const jsonData = await response.json();
  //console.log(jsonData.species.name);
  return jsonData.base_experience;
};

export { getPokemonBaseHappiness, getPokemonName };
