import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Premier from './Premier';
import Bundesliga from './Bundesliga';
import LaLiga from './LaLiga';

export default function Estadisticas({ pagina, asignarPartidos, id }) {
  const [cambioLiga, setCambioLiga] = useState(1);

  return (
    <LinearGradient
      colors={['#9F9E9E', '#656464', '#363636']}
      // start={{ x: 1, y: 0 }}
      //end={{ x: 0, y: 1 }}
      style={styles.contPrincipal}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.titulo}>Ligas</Text>
        <View style={styles.contBotones}>
          <TouchableOpacity style={styles.btn} onPress={() => setCambioLiga(1)}>
            <Image
              style={styles.images}
              source={require('../assets/premier.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setCambioLiga(2)}>
            <Image
              style={styles.images}
              source={require('../assets/bundesliga.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setCambioLiga(3)}>
            <Image
              style={styles.images}
              source={require('../assets/laliga.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.stadistcs}>
          {cambioLiga == 1 ? (
            <Premier
              pagina={pagina}
              asignarPartidos={asignarPartidos}
              id={id}
            />
          ) : cambioLiga == 2 ? (
            <Bundesliga
              pagina={pagina}
              asignarPartidos={asignarPartidos}
              id={id}
            />
          ) : cambioLiga == 3 ? (
            <LaLiga pagina={pagina} asignarPartidos={asignarPartidos} id={id} />
          ) : (
            <Text>Falla</Text>
          )}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  contPrincipal: {
    flex: 1,
  },
  titulo: {
    //fontFamily: 'Script MT Bold',
    fontSize: 30,
    alignSelf: 'center',
    color: '#ffff',
    margin: 5,
    marginTop: 25,
  },
  contBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  images: {
    width: 70,
    height: 60,
  },
  btn: {
    backgroundColor: '#5B5B5B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  textBtn: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stadistcs: {
    flex: 1,
    marginTop: 15,
  },
});
