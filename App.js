import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'ninja', key: '1' },
    { name: 'shau', key: '2' },
    { name: 'blade', key: '3' },
    { name: 'goku', key: '4' },
    { name: 'vegeta', key: '5' },
    { name: 'naruto', key: '6' },
    { name: 'eren', key: '7' },
    { name: 'saskeu', key: '8' },
    { name: 'gohan', key: '9' },
    { name: 'chichi', key: '10' }
  ])

  return (
    <View style={styles.container}>

      <FlatList
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
    backgroundColor: 'pink',
    fontSize: 24
  }

});
