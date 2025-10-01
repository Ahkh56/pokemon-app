import { useGetPokemonListQuery } from '../features/pokemonApi';
import { useEffect } from 'react';

export default function useListViewModel() {
  const { data, error, isLoading, refetch } = useGetPokemonListQuery({ limit: 100, offset: 0 });

  // A simple transformed array that screens can consume
  const items = (data && data.results) ? data.results.map((r) => ({ name: r.name, url: r.url })) : [];

  useEffect(() => {
    // placeholder for future side effects
  }, [data]);

  return {
    items,
    error,
    isLoading,
    refetch,
  };
}
