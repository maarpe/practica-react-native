import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import react from 'react';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput 
        style={styles.input}  
        placeholder="escribí algo"
        keyboardType="numeric"
      />
      <Button title="Presioname" onPress={() => Alert.alert('Botón presionado')}>
      </Button>
      <Card>
      </Card>
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
  }
});
