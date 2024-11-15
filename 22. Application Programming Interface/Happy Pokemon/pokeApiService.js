const getPokemonName = async (id) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
  );
  const data = await response.json();
  return data.name;
};

const getPokemonBaseHappiness = async (id) => {
  // TODO: implement
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  const jsonData = await response.json();
  //console.log(jsonData.species.name);
  return jsonData.base_happiness;
};

const getPokemonEvolutionChain = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
  const data = await response.json();
  const extractPokemonNames = (chain) => {
    const names = [chain.species.name]; // Start with the current Pokémon's name

    // Check for evolves_to and iterate over it
    if (chain.evolves_to.length > 0) {
        for (const evolution of chain.evolves_to) {
            names.push(...extractPokemonNames(evolution)); // Recursively extract names
        }
    }
    return names;
  };
  const evolutionNames = extractPokemonNames(data.chain);
  return evolutionNames;
}

export { getPokemonBaseHappiness, getPokemonName, getPokemonEvolutionChain };
