import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import Add from './Add.js';

export default function Premier({ pagina, asignarPartidos, id }) {
  const [page, asignarPage] = useState(1);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [equipos, setEquipos] = useState({
    Arsenal: 2,
    'Manchester City': 2,
    'Manchester United': 1,
    Liverpool: 1,
    'Aston Villa': 0,
  });

  const [golesEquipos, setGolesEquipos] = useState({
    Arsenal: 8,
    'Manchester City': 5,
    'Manchester United': 2,
    Liverpool: 4,
    'Aston Villa': 1,
  });

  const [partidos, setPartidos] = useState({
    Arsenal: [
      ['Arsenal', 5, 'Liverpool', 4],
      ['Arsenal', 3, 'Manchester United', 2],
    ],
    'Manchester City': [
      ['Manchester City', 1, 'Manchester United', 2],
      ['Manchester City', 2, 'Aston Villa', 1],
    ],
    'Manchester United': [
      ['Manchester United', 2, 'Arsenal', 3],
      ['Manchester United', 2, 'Manchester City', 1],
    ],
    Liverpool: [
      ['Liverpool', 4, 'Arsenal', 5],
      ['Liverpool', 4, 'Aston Villa', 1],
    ],
    'Aston Villa': [
      ['Aston Villa', 1, 'Manchester City', 2],
      ['Aston Villa', 1, 'Liverpool', 4],
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
              <Text style={styles.textStd}>Premier</Text>
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
          liga={'Premier'}
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
              <Text style={styles.textStd}>Premier</Text>
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
              <Icon style={styles.tBtns} name="plus" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btns}
              onPress={() => asignarPage(1)}
            >
              <Icon style={styles.tBtns} name="arrowleft" size={20} />
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
    // backgroundColor: '#2E2E2E',
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
    // borderColor: '#C2C2C2',
  },
  contTextStd: {
    marginTop: 28,
    marginBottom: 20,
  },
  textStd: {
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  number: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
    //  color: '#C2C2C2',
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
