import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import supported modules from npm
import Inicio from './components/Inicio';
import Estadisticas from './components/Estadisticas';
import Partidos from './components/Partidos';


export default function App() {
  const [pagina, asignarPagina] = useState(1);
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  return (
    <View style={styles.container}>
      {pagina === 1 ? 
        <Inicio pagina={asignarPagina}/>
      : pagina === 2 ?
        <Estadisticas pagina={asignarPagina} asignarPartidos={setData} id={setId}/>
      : pagina === 3 ?
        <Partidos pagina={asignarPagina} partidos={data} id={id}/>
      : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24414D',
  },

});
