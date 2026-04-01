import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'; // Importamos el Hook useState
export default function HomeScreen() {

  const [count, setCount] = useState(0); //el useState devuelve el estado del count y una función para actualizarlo (setCount)
  //iniciamos el contador en 0
  const alPulsar = () => {
    setCount(count + 1); //lo llamo y sumo 1
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SaveLight App</Text>
      <Text style={styles.label}>`Contador: {count}`</Text>
      <TouchableOpacity style={styles.boton} onPress={alPulsar}>
        <Text style={styles.textoBoton}>Botón</Text>
      </TouchableOpacity>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});