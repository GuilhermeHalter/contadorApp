import { StyleSheet, Text, View, Image} from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

      <Text style={styles.Text}>Livro da noite</Text>
      
      <Image style={styles.image}
      source={require("../contadorApp/assets/img/livro2.jpeg")}/>

      <Counter limite={100}/>

      </View>

      <View style={styles.card}>
        <Text style={styles.Text}>Não somente pelas escrituras</Text>

        <Image style={styles.image}
        source={require("../contadorApp/assets/img/NaoSomentePelasEscrituras.jpg")}/>

        <Counter limite={100}/>
      </View>

      <View style={styles.card}>
        <Text style={styles.Text}>The Witcher Espada do Destino</Text>

        <Image style={styles.image}
        source={require("../contadorApp/assets/img/TheWitcherEspadadoDestino.jpg")}/>

        <Counter limite={100}/> 

      </View>

      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    flexWrap:'wrap',
    width: 500
  },
  image: {
    width: 200,
    height:200,
    resizeMode: "contain",
  },
  Text:{
    fontFamily: 'Yatra-One',
    fontSize: 27,
  },
  card:{
    flexDirection:"column",
    alignItems: 'center',
  },
});
