import React from 'react';
import { render } from '@testing-library/react-native';
import DetailScreen from '../src/screens/DetailScreen';
import { Provider } from 'react-redux';
import { store } from '../src/store';

jest.mock('../src/viewmodels/useDetailViewModel', () => {
  return jest.fn();
});

const useVM = require('../src/viewmodels/useDetailViewModel');

describe('DetailScreen', () => {
  beforeEach(() => {
    useVM.mockReset();
  });

  it('shows no selection message', () => {
    const { getByText } = render(<Provider store={store}><DetailScreen pokemonName={null} onBack={jest.fn()} /></Provider>);
    expect(getByText('No Pokémon selected.')).toBeTruthy();
  });

  it('shows details when available', () => {
    useVM.mockReturnValue({
      data: { id: 1, name: 'bulbasaur', height: 7, weight: 69, types: ['grass'], sprites: { front_default: null } },
      isLoading: false,
      error: null,
      refetch: jest.fn()
    });
    const { getByText } = render(<Provider store={store}><DetailScreen pokemonName={'bulbasaur'} onBack={jest.fn()} /></Provider>);
    expect(getByText('bulbasaur')).toBeTruthy();
    expect(getByText('ID: 1')).toBeTruthy();
  });
});
