import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shadow Ninja');
  const [person, setPerson] = useState({name: "Mario", age: 55})

  const clickHandler = () =>{
    setName('Test No yesterday');
    setPerson({name: 'Luigi', age: 30});
  }

  return (
    <View style={styles.container}>
      <Text>My name: {name}</Text>
      <Text>Itz me {person.name} and I am {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
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
  buttonContainer:{
    marginTop: 20
  }
});
