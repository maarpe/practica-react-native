import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderColor: 'black',
    marginTop: 20,
  },
  button: {

  },
  texto: {
    overflow: 'hidden',
    textAlign: 'center',
    padding: 10.,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  input: {
    overflow: 'hidden',
    textAlign: 'center',
    padding: 10.,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,

  }
});

const Card = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

export default Card;