import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: 'black',
        marginTop: 20,
    },
  cafe: {
    width: 280,
    height: 300,
    borderRadius: 50,
  },
  texto: {
    overflow: 'hidden',
    textAlign: 'center',
    padding: 10.,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  }
});

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Americano</Text>
    </View>
  );
};

export default Card;