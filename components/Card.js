import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

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
  }
});

const Card = () => {
  return (
    <View style={styles.container}>
      <Text aria-label='Presioname'></Text>
      <Text style={styles.texto}>Presioname</Text>
      <Button onPress={() => Alert.alert('Botón presionado')}></Button>  
    </View>
  );
};

export default Card;