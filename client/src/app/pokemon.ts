export interface Pokemon {
  id?: number;
  name: string;
  count?: number;
  url?: string;
}


export interface PokemonDetail {
  id: number;
  name: string;
  weight: number;
}

// function parsePokemon(partialPokemon: {name: string; url: string}): PokemonDetail {
//   const id = partialPokemon.url.slice(0, -1).split('/').pop();
//   return {id, name: partialPokemon.name}
// }