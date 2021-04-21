import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shadow Ninja');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput style={styles.input} />
      <TextInput>name: {name} age: {age}</TextInput>
      
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
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:200,
  }
});
