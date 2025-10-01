import React from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  Image, 
  ScrollView, 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import useDetailViewModel from '../viewmodels/useDetailViewModel';
// You can use any icon library (e.g. react-native-vector-icons/MaterialIcons)
import Icon from 'react-native-vector-icons/Ionicons'; // make sure installed

export default function DetailScreen({ pokemonName, onBack }) {
  const { data, isLoading, error, refetch } = useDetailViewModel(pokemonName);

  if (!pokemonName) {
    return (
      <View style={styles.center}>
        <Text>No Pokémon selected.</Text>
        <TouchableOpacity onPress={onBack}>
          <Text style={{ color: '#2E7CF6', marginTop: 8 }}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !data) {
    return (
      <View style={styles.center}>
        <Text testID="error">Failed to load details.</Text>
        <TouchableOpacity onPress={refetch}>
          <Text style={{ color: '#2E7CF6', marginTop: 8 }}>Retry</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBack}>
          <Text style={{ color: '#2E7CF6', marginTop: 8 }}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#fff' }}>
      {/* Status bar styling */}
      <StatusBar backgroundColor="#2E7CF6" barStyle="light-content" />

      {/* Top bar with back button + Pokémon name */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.topBarText}>{data?.name ?? ''}</Text>
      </View>

      {/* Pokémon details */}
      <ScrollView contentContainerStyle={{padding:16}}>
        {data.sprites?.front_default && (
          <Image 
            source={{ uri: data.sprites.front_default }} 
            style={{ width:150, height:150, marginVertical:12 }} 
          />
        )}

        <Text>ID: {data.id}</Text>
        <Text>Height: {data.height}</Text>
        <Text>Weight: {data.weight}</Text>
        <Text>Types: {data.types.join(', ')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: { flex:1, alignItems:'center', justifyContent:'center' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#2E7CF6',
    paddingHorizontal: 12,
  },
  backButton: {
    marginRight: 12,
  },
  topBarText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
