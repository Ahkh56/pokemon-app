import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import ListScreen from '../src/screens/ListScreen';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import * as api from '../src/features/pokemonApi';

jest.mock('../src/features/pokemonApi', () => {
  const original = jest.requireActual('../src/features/pokemonApi');
  return {
    ...original,
    useGetPokemonListQuery: jest.fn(),
  };
});

const mockedHook = require('../src/features/pokemonApi').useGetPokemonListQuery;

describe('ListScreen', () => {
  beforeEach(() => {
    mockedHook.mockReset();
  });

  it('renders loading state', () => {
    mockedHook.mockReturnValue({ data: null, isLoading: true, error: null, refetch: jest.fn() });
    const { getByTestId } = render(<Provider store={store}><ListScreen onItemPress={jest.fn()} /></Provider>);
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('renders list and responds to press', async () => {
    const items = { results: [{ name: 'bulbasaur', url: 'u' }, { name: 'charmander', url: 'u' }] };
    mockedHook.mockReturnValue({ data: items, isLoading: false, error: null, refetch: jest.fn() });
    const onPress = jest.fn();
    const { findByTestId } = render(<Provider store={store}><ListScreen onItemPress={onPress} /></Provider>);
    const list = await findByTestId('list');
    expect(list).toBeTruthy();
    const item = await findByTestId('item-bulbasaur');
    fireEvent.press(item);
    expect(onPress).toHaveBeenCalledWith('bulbasaur');
  });
});
