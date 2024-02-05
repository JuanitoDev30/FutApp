import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Add({
  liga,
  goles,
  setGoles,
  equipos,
  setEquipos,
  partidos,
  setPartidos,
  page,
}) {
  const [equipo1, setEquipo1] = useState('');
  const [golesEquipo1, setGolesEquipo1] = useState(0);
  const [equipo2, setEquipo2] = useState('');
  const [golesEquipo2, setGolesEquipo2] = useState(0);

  const añadir = () => {
    if (equipo1 && equipo2) {
      if (golesEquipo2 > golesEquipo1) {
        if (equipos.hasOwnProperty(equipo2)) {
          // Si existe, aumentar su número
          setEquipos(prevEquipos => ({
            ...prevEquipos,
            [equipo2]: prevEquipos[equipo2] + 1,
          }));
        } else {
          // Si no existe, agregarlo con el número proporcionado
          setEquipos(prevEquipos => ({
            ...prevEquipos,
            [equipo2]: 1,
          }));
        }
        setEquipos(prevEquipos => ({
          ...prevEquipos,
          [equipo1]: 0,
        }));
      } else if (golesEquipo1 > golesEquipo2) {
        console.log(equipos.hasOwnProperty(equipo1));
        if (equipos.hasOwnProperty(equipo1)) {
          setEquipos(prevEquipos => ({
            ...prevEquipos,
            [equipo1]: prevEquipos[equipo1] + 1,
          }));
        } else {
          setEquipos(prevEquipos => ({
            ...prevEquipos,
            [equipo1]: 1,
          }));
        }
        setEquipos(prevEquipos => ({
          ...prevEquipos,
          [equipo2]: 0,
        }));
      } else {
        if (!equipos.hasOwnProperty(equipo1)) {
          setEquipos(prevEquipos => ({
            ...prevEquipos,
            [equipo2]: 0,
            [equipo1]: 0,
          }));
        }
      }
      //Para actualizar el diccionario de los goles
      if (goles.hasOwnProperty(equipo1)) {
        //Para actualizar los partidos
        setPartidos(prevPartidos => ({
          ...prevPartidos,
          [equipo1]: [
            ...(prevPartidos[equipo1] || []),
            [equipo1, golesEquipo1, equipo2, golesEquipo2],
          ],
        }));
        setGoles(prevGoles => ({
          ...prevGoles,
          [equipo1]: prevGoles[equipo1] + parseInt(golesEquipo1, 10),
        }));
      } else {
        //Para actualizar los partidos
        setPartidos(prevPartidos => ({
          ...prevPartidos,
          [equipo1]: [[equipo1, golesEquipo1, equipo2, golesEquipo2]],
        }));
        setGoles(prevGoles => ({
          ...prevGoles,
          [equipo1]: parseInt(golesEquipo1, 10),
        }));
      }
      if (goles.hasOwnProperty(equipo2)) {
        //Para actualizar los partidos
        setPartidos(prevPartidos => ({
          ...prevPartidos,
          [equipo2]: [
            ...(prevPartidos[equipo2] || []),
            [equipo2, golesEquipo2, equipo1, golesEquipo1],
          ],
        }));
        setGoles(prevGoles => ({
          ...prevGoles,
          [equipo2]: prevGoles[equipo2] + parseInt(golesEquipo2, 10),
        }));
      } else {
        //Para actualizar los partidos
        setPartidos(prevPartidos => ({
          ...prevPartidos,
          [equipo2]: [[equipo2, golesEquipo2, equipo1, golesEquipo1]],
        }));
        setGoles(prevGoles => ({
          ...prevGoles,
          [equipo2]: parseInt(golesEquipo2, 10),
        }));
      }
    }

    page(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>{liga}</Text>
      <View style={styles.cont}>
        <Text style={styles.text}>Equipo 1: </Text>
        <TextInput
          style={styles.input}
          value={equipo1}
          onChangeText={setEquipo1}
        />
        <Text style={styles.textGol}>Goles: </Text>
        <TextInput
          style={styles.inputG}
          value={golesEquipo1}
          onChangeText={setGolesEquipo1}
          maxLength={3}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.cont}>
        <Text style={styles.text}>Equipo 2: </Text>
        <TextInput
          style={styles.input}
          value={equipo2}
          onChangeText={setEquipo2}
        />
        <Text style={styles.textGol}>Goles: </Text>
        <TextInput
          style={styles.inputG}
          value={golesEquipo2}
          onChangeText={setGolesEquipo2}
          maxLength={3}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.botones}>
        <TouchableOpacity style={styles.btn} onPress={() => añadir()}>
          <Text style={{ color: '#fff' }}>Añadir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancelar} onPress={() => page(1)}>
          <Text style={{ color: '#fff' }}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'rgba(1,0,0,0.3)',
    borderRadius: 20,
    height: 400,
    marginTop: 20,
  },
  tittle: {
    fontSize: 20,
    marginTop: 40,
    marginBottom: 35,

    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textGol: {
    margin: 5,
    marginRight: 5,
    fontSize: 16,
  },
  cont: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    margin: 5,
    fontSize: 15,
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    width: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginRight: 30,
  },
  inputG: {
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    height: 40,
    width: 60,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btn: {
    color: '#fff',
    alignSelf: 'center',
    backgroundColor: '#3498db',
    borderRadius: 11,
    padding: 10,
    marginBottom: 20,
    width: 90,
    alignItems: 'center',
  },
  btnCancelar: {
    color: '#fff',
    alignSelf: 'center',
    backgroundColor: '#e74c3c',
    borderRadius: 11,
    padding: 10,
    marginBottom: 20,
    width: 90,
    alignItems: 'center',
  },
  botones: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
