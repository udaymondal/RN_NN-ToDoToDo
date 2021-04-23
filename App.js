import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'ninja', id: '1' },
    { name: 'shau', id: '2' },
    { name: 'blade', id: '3' },
    { name: 'goku', id: '4' },
    { name: 'vegeta', id: '5' },
    { name: 'naruto', id: '6' },
    { name: 'eren', id: '7' },
    { name: 'saskeu', id: '8' },
    { name: 'gohan', id: '9' },
    { name: 'chichi', id: '10' }
  ])

  return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name.toUpperCase()}</Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#03DAC5',
    fontSize: 24,
    marginHorizontal:10,
    marginTop: 24,
  }

});
