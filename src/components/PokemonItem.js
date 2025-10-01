import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function PokemonItem({ name, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(name)} style={styles.container} testID={`item-${name}`}>
      <View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: {
    fontSize: 16,
    textTransform: 'capitalize',
  }
});
