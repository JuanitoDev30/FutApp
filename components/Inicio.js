import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BlurView } from 'expo-blur';
export default function Inicio({ pagina }) {
  return (
    <LinearGradient
      colors={['#9F9E9E', '#656464', '#363636']}
      //start={{ x: 1, y: 0 }}
      // end={{ x: 0, y: 1 }}
      style={styles.contPrincipal}
    >
      <View style={styles.contenedor}>
        <Icon name="soccer-ball-o" size={90} style={styles.icon} />
        <Text style={styles.titulo}>FulbitoApp</Text>
        <TouchableOpacity style={styles.boton} onPress={() => pagina(2)}>
          <Text style={styles.textoboton}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  contPrincipal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedor: {
    width: 300,
    height: 400,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  titulo: {
    fontSize: 22,
    height: 40,
    borderBottomWidth: 5,
    borderBottomColor: '#fff',
    color: '#ffff',
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    margin: 10,
    color: '#fff',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#5B5B5B',
    padding: 5,
    borderRadius: 20,
    marginTop: 40,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  textoboton: {
    fontSize: 16,
    //fontFamily: 'Script MT Bold',
    color: '#fff',
  },
});
