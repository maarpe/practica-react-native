import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: 'black',
        marginTop: 20,
    },
  button:{

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
      <Button>
        title="Presioname"
        onPress={()=>Alert.alert('Botón presionado')}

      </Button>
    </View>
  );
};

export default Card;