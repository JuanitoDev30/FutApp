import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from 'react-native-vector-icons/AntDesign';

export default function Partidos({ pagina, partidos, id }) {
  if (partidos.hasOwnProperty(id) && Object.keys(partidos[id]).length > 0) {
    const datosEquipo = partidos[id];
    const cantP = Object.keys(partidos[id]).length;
    let golesF = 0;
    let golesC = 0;

    console.log(datosEquipo);
    datosEquipo.forEach(item => {
      golesF += parseInt(item[1], 10);
      golesC += parseInt(item[3], 10);
    });
    return (
      <View
        // start={{x: 1, y:0}}
        //end={{x:0, y:1}}
        style={styles.contPrincipal}
      >
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={['#006706', '#009E07', '#006706']}
            // colors={['#9F9E9E', '#656464', '#363636']}
            // start={{x: 1, y:0}}
            //end={{x:0, y:1}}
          >
            <View style={styles.contTit}>
              <Text style={styles.titulo}>Partidos</Text>
              <Text style={styles.titulo}>{id}</Text>
            </View>
          </LinearGradient>
          <View style={styles.info}>
            <ImageBackground
              style={styles.image}
              source={require('../assets/1137.jpg')}
            >
              <ScrollView>
                <BlurView intensity={40} style={styles.scrollContainer}>
                  {datosEquipo.map((item, index) => (
                    <View key={index} style={styles.listText}>
                      <Text
                        style={
                          item[1] >= item[3] ? styles.textoG : styles.textoR
                        }
                      >
                        {`${item[0]} - ${item[1]}`}
                      </Text>
                      <Text
                        style={
                          item[3] > item[1] ? styles.textoG : styles.textoR
                        }
                      >
                        {`${item[2]} - ${item[3]}`}
                      </Text>
                    </View>
                  ))}
                </BlurView>
              </ScrollView>

              <BlurView intensity={30} style={styles.extraInfo}>
                <View
                  style={{
                    flexDirection: 'column',

                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.textInfo}>Goles a favor: </Text>
                  <Text style={styles.textInfo}>Goles en contra:</Text>
                  <Text style={styles.textInfo}>Partidos jugados: </Text>
                </View>
                <View
                  style={{ flexDirection: 'column', justifyContent: 'center' }}
                >
                  <Text style={styles.textInfoDatos}>{golesF}</Text>
                  <Text style={styles.textInfoDatos}> {golesC}</Text>
                  <Text style={styles.textInfoDatos}> {cantP}</Text>
                </View>
              </BlurView>
              <View>
                <TouchableOpacity style={styles.btns} onPress={() => pagina(2)}>
                  <Icon style={styles.tBtns} name="arrowleft" size={20} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.titulo}>Partidos</Text>
        <Text style={styles.titulo}>{id}</Text>
        <Text>No hay datos para el equipo con ID: {id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contPrincipal: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 80,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    // backgroundColor: '#E6E8E6',
    // borderRadius: 30,
    marginBottom: 10,
    height: 180,
    width: '95%',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1.3,
  },
  contTit: {
    margin: 20,
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',

    // ...StyleSheet.absoluteFillObject,
    //borderRadius: 100,
    //borderWidth: 5,
    // borderColor: '#009E07',
    //marginBottom: 20,
  },
  titulo: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 22,
    color: '#E6E8E6',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  info: {
    //marginBottom: 20,
    //marginTop: 20,

    backgroundColor: '#fff',
    flex: 1,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  flat: {
    marginTop: 30,
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E8E6',
    borderRadius: 30,
    marginBottom: 10,
  },
  btns: {
    backgroundColor: '#3b5998',
    marginBottom: 20,
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    width: 40,
    height: 40,
  },
  tBtns: {
    color: '#fff',
  },
  listText: {
    flexDirection: 'row',
  },
  textoR: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 6,
    marginHorizontal: 10,
    fontFamily: 'sans-serif-condensed',
  },
  textoG: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 6,
    marginHorizontal: 10,
    fontFamily: 'sans-serif-condensed',
  },
  textInfo: {
    marginTop: 3,
    fontSize: 18,
    color: 'black',
    marginHorizontal: 20,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  textInfoDatos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  extraInfo: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    paddingBottom: 20,
    marginBottom: 50,
    // backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    //borderRadius: 20,
    height: 120,
  },
});
