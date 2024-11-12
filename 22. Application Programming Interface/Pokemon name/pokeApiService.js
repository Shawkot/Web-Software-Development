const getPokemonName = async (id) => {
  // implement functionality here
  const url = 'https://pokeapi.co/api/v2/pokemon/'+id+'/'
  const response = await fetch(url);
  const jsonData = await response.json();
  //console.log(jsonData.species.name);
  return jsonData.name;
};

export { getPokemonName };
