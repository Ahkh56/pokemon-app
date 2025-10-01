import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { View, ActivityIndicator, SafeAreaView } from 'react-native';
import { store, persistor } from './src/store';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';

export default function App() {
  const [route, setRoute] = useState({ name: 'List', params: {} });

  useEffect(() => {
    // No-op, reserved for any top-level initialization
  }, []);

  const navigate = (name, params) => setRoute({ name, params });
  const goBack = () => setRoute({ name: 'List', params: {} });

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          {route.name === 'List' ? (
            <ListScreen onItemPress={(p) => navigate('Detail', { pokemonName: p })} />
          ) : (
            <DetailScreen pokemonName={route.params.pokemonName} onBack={goBack} />
          )}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

function Loading() {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
}
