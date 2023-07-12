import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [texto, setTexto] = useState('');
  const [TituloBoton, setTitulo] = useState('');

  useEffect(() => {
    setTitulo("Presioname");
  }, [])

  function cambiarBoton() {
    if(TituloBoton === "Presioname") {
      setTitulo("Presionado");
    } else {
      setTitulo("Presioname");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <StatusBar style="auto" />
        <input onKeyUp={(e) => setTexto(e.target.value)} />
        <p style={styles.textoEscrito}>{texto}</p>
        <Button title={TituloBoton} onPress={cambiarBoton}></Button>
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
  },
  input: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  card: {
    borderColor: 'black',
    borderWidth: 1,
  },
  textoEscrito: {
    margin: 5,
    marginLeft: 2,
    padding: 5,
    borderColor: 'grey',
  },
});
