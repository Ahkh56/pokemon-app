import { useGetPokemonByNameQuery } from '../features/pokemonApi';

export default function useDetailViewModel(pokemonName) {
  const { data, error, isLoading, refetch } = useGetPokemonByNameQuery(pokemonName, { skip: !pokemonName });

  const viewData = data ? {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types ? data.types.map(t => t.type.name) : [],
    sprites: data.sprites,
  } : null;

  return {
    data: viewData,
    error,
    isLoading,
    refetch,
  };
}
