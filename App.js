import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shadow Ninja');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text>name: {name} age: {age}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'goldenrod'
  },

});
