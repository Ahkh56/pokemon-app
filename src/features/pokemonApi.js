import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_API_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: (params = { limit: 50, offset: 0 }) => `pokemon?limit=${params.limit}&offset=${params.offset}`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}/`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokemonApi;
