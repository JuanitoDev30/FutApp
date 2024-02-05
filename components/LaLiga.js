import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Add from './Add.js';
import { BlurView } from 'expo-blur';
export default function LaLiga({ pagina, asignarPartidos, id }) {
  const [page, asignarPage] = useState(1);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [equipos, setEquipos] = useState({
    'Real Madrid': 2,
    'Atletico de Madrid': 1,
    'FC Barcelona': 0,
    Girona: 2,
    Valencia: 0,
  });

  const [golesEquipos, setGolesEquipos] = useState({
    'Real Madrid': 6,
    'Atletico de Madrid': 10,
    'FC Barcelona': 3,
    Girona: 5,
    Valencia: 0,
  });

  const [partidos, setPartidos] = useState({
    'Real Madrid': [
      ['Real Madrid', 1, 'Atletico de Madrid', 4],
      ['Real Madrid', 5, 'FC Barcelona', 3],
    ],
    'Atletico de Madrid': [
      ['Atletico de Madrid', 4, 'Real Madrid', 1],
      ['Atletico de Madrid', 6, 'Girona', 2],
    ],
    'FC Barcelona': [
      ['FC Barcelona', 3, 'Real Madrid', 5],
      ['FC Barcelona', 0, 'Valencia', 0],
    ],
    Girona: [
      ['Girona', 2, 'Atletico de Madrid', 6],
      ['Girona', 3, 'Valencia', 0],
    ],
    Valencia: [
      ['Valencia', 0, 'Girona', 3],
      ['Valencia', 0, 'FC Barcelona', 0],
    ],
  });

  useEffect(() => {
    const equiposArray = Object.entries(equipos);

    equiposArray.sort((a, b) => b[1] - a[1]);

    let idCounter = 1;
    const nuevosDatos = equiposArray.map(([equipo]) => {
      const id = idCounter++;
      return { id: id.toString(), text: equipo };
    });

    setData(nuevosDatos);
  }, [equipos]);

  useEffect(() => {
    const equiposArray = Object.entries(golesEquipos);

    equiposArray.sort((a, b) => b[1] - a[1]);

    let idCounter = 1;
    const nuevosDatos = equiposArray.map(([equipo, goles]) => {
      return { id: idCounter++, text: `${equipo} - ${goles} goles` };
    });

    setData2(nuevosDatos);
  }, [golesEquipos]);

  useEffect(() => {
    asignarPartidos(partidos);
  }, [asignarPartidos, partidos]);

  const verPartidos = text => {
    id(text);
    pagina(3);
  };

  return (
    <View style={styles.contPrincipal}>
      {page === 1 ? (
        <View style={{ flex: 1 }}>
          <BlurView intensity={28} tint="dark" style={styles.datos}>
            <View style={styles.contTextStd}>
              <Text style={styles.textStd}>Mejores Equipos</Text>
              <Text style={styles.textStd}>LaLiga</Text>
            </View>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text style={styles.number}>{item.id}</Text>
                  <TouchableOpacity onPress={() => verPartidos(item.text)}>
                    <Text style={{ color: '#ffff' }}>{item.text}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </BlurView>
          <View style={styles.ctnBotones}>
            <TouchableOpacity
              style={styles.btns}
              onPress={() => asignarPage(2)}
            >
              <Icon style={styles.tBtns} name="plus" size={20} />
            </TouchableOpacity>
            <View style={styles.contenedorBotonesVS}>
              <TouchableOpacity style={styles.btns} onPress={() => pagina(1)}>
                <Icon style={styles.tBtns} name="arrowleft" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btns}
                onPress={() => asignarPage(3)}
              >
                <Icon style={styles.tBtns} name="arrowright" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : page === 2 ? (
        <Add
          liga={'LaLiga'}
          goles={golesEquipos}
          setGoles={setGolesEquipos}
          equipos={equipos}
          setEquipos={setEquipos}
          partidos={partidos}
          setPartidos={setPartidos}
          page={asignarPage}
        />
      ) : page === 3 ? (
        <View style={{ flex: 1 }}>
          <BlurView intensity={28} tint="dark" style={styles.datos}>
            <View style={styles.contTextStd}>
              <Text style={styles.textStd}>Equipos Goles</Text>
              <Text style={styles.textStd}>LaLiga</Text>
            </View>
            <FlatList
              data={data2}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text style={styles.number}>{item.id}</Text>
                  <Text style={{ color: '#ffff' }}>{item.text}</Text>
                </View>
              )}
            />
          </BlurView>
          <View style={styles.ctnBotones}>
            <TouchableOpacity
              style={styles.btns}
              onPress={() => asignarPage(2)}
            >
              <Icon style={styles.tBtns} name="plus" size={15} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btns}
              onPress={() => asignarPage(1)}
            >
              <Icon style={styles.tBtns} name="arrowleft" size={15} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  contPrincipal: {
    flex: 1,
  },
  datos: {
    // backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    flex: 1,
    padding: 10,
    marginRight: 13,
    marginLeft: 13,
  },
  contenedorBotonesVS: {
    flexDirection: 'row',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
  },
  contTextStd: {
    marginTop: 28,
    marginBottom: 20,
  },
  textStd: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffff',
  },
  number: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  btns: {
    alignSelf: 'center',
    backgroundColor: '#3b5998',
    marginTop: 7,
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 10,
  },
  tBtns: {
    color: '#fff',
  },
  ctnBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 'auto',
    marginBottom: 10,
    marginRight: 10,
    marginTop: 6,
  },
});
