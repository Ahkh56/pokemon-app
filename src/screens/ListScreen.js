import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  Button, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  Image, 
  TouchableOpacity
} from 'react-native';
import useListViewModel from '../viewmodels/useListViewModel';

export default function ListScreen({ onItemPress }) {
  const { items, isLoading, error, refetch } = useListViewModel();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" testID="loading" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text testID="error">Failed to load Pokémon.</Text>
        <Button title="Retry" onPress={() => refetch()} />
      </View>
    );
  }

  // 🔹 Helper: Extract ID from API url
  const getPokemonId = (url) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff' }}>
      {/* status bar styling */}
      <StatusBar backgroundColor="#2E7CF6" barStyle="light-content" />

      {/* top bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>PokeReact</Text>
      </View>

      {/* list with images */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => {
          const id = getPokemonId(item.url);
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <TouchableOpacity 
              style={styles.listItem} 
              onPress={() => onItemPress(item.name)} // keep your original click
            >
              <Image source={{ uri: imageUrl }} style={styles.pokemonImage} />
              <Text style={styles.pokemonName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        testID="list"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: { flex:1,alignItems:'center',justifyContent:'center' },
  topBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#2E7CF6',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  topBarText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  pokemonImage: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  pokemonName: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
