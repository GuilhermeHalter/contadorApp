import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

function Card (props) {

  return(
    <View style={styles.card}>
      <Image
        style={{
          resizeMode: 'stretch',
          width: '100%',
          height:200,
          marginBottom: 10,
        }}
        source= {{uri: props.livro.capa}}
      />
      <Text style={{ fontSize: 20, color:'#fff'}}>{props.livro.piloto}</Text>
      <Text style={{ fontSize: 20, color:'#fff'}}>{props.livro.pais}</Text>
      <Text style={{ fontSize: 20, color:'#fff'}}>{props.livro.equipe}</Text>
      <Text style={{ fontSize: 20, color:'#fff'}}>{props.livro.pontos}</Text>
    </View>
  )
}


export default function App() {
  const livros = [
    {
      id: 1,
      capa:'https://cdn-6.motorsport.com/images/mgl/Y99d13AY/s800/max-verstappen-red-bull-racing-1.jpg',
      piloto:'Max Verstappen',
      pais:'Holanda',
      equipe:'RBR/Honda',
      pontos:'44',
    },
    {
      id: 2,
      capa:'',
      piloto:'Sergio Pérez',
      pais:'México',
      equipe:'RBR/Honda',
      pontos:'43',
    },
    {
      id: 3,
      capa:'',
      piloto:'Fernando Alonso',
      pais:'Espanha',
      equipe:'Aston Martin/Mercedes',
      pontos:'30',
    },
    {
      id: 4,
      capa:'',
      piloto:'Carlos Sainz',
      pais:'Espanha',
      equipe:'Ferrari',
      pontos:'20',
    },
    {
      id: 5,
      capa:'',
      piloto:'Lewis Hamilton',
      pais:'Reino Unido',
      equipe:'Mercedes',
      pontos:'20',
    },
    {
      id: 6,
      capa:'',
      piloto:'George Russell',
      pais:'Reino Unido',
      equipe:'Mercedes',
      pontos:'18',
    },
    {
      id: 7,
      capa:'',
      piloto:'Lance Stroll',
      pais:'Canadá',
      equipe:'Aston Martin/Mercedes',
      pontos:'8',
    },
    {
      id: 8,
      capa:'',
      piloto:'Charles Leclerc',
      pais:'Italia',
      equipe:'Ferrari',
      pontos:'6',
    },
    {
      id: 9,
      capa:'',
      piloto:'Valtteri Botas',
      pais:'Finlândia',
      equipe:'Alfa Romeo/Ferrari',
      pontos:'4',
    },
    {
      id: 10,
      capa:'',
      piloto:'Estaban Ocon',
      pais:'França',
      equipe:'Alpine/Renault',
      pontos:'4',
    },
    {
      id: 11,
      capa:'',
      piloto:'Pierre Gasly',
      pais:'França',
      equipe:'Alpine/Renault',
      pontos:'4',
    },
    {
      id: 12,
      capa:'',
      piloto:'Kevin Magnussen',
      pais:'Dinamarca',
      equipe:'Haas/Ferrari',
      pontos:'1',
    },
    {
      id: 13,
      capa:'',
      piloto:'Alexander Albon',
      pais:'Tailândia',
      equipe:'Williams/Mercedes',
      pontos:'1',
    },
    {
      id: 14,
      capa:'',
      piloto:'Yuki Tsunoda',
      pais:'Japão',
      equipe:'AlphaTauri/Honda',
      pontos:'0',
    },
    {
      id: 15,
      capa:'',
      piloto:'Nico Hulkenberg',
      pais:'Alemãnha',
      equipe:'Haas/Ferrari',
      pontos:'0',
    },
    {
      id: 16,
      capa:'',
      piloto:'Logan Sargeant',
      pais:'Estados Unidos',
      equipe:'Willias/Mercedes',
      pontos:'0',
    },
    {
      id: 17,
      capa:'',
      piloto:'Guanyu Zhou',
      pais:'China',
      equipe:'Alfa Romeo/Ferrari',
      pontos:'0',
    },
    {
      id: 18,
      capa:'',
      piloto:'Nyck de Vries',
      pais:'Holanda',
      equipe:'AlphaTauri/Honda',
      pontos:'0',
    },
    {
      id: 19,
      capa:'',
      piloto:'Oscar Piastri',
      pais:'Australia',
      equipe:'McLaren/Mercedes',
      pontos:'0',
    },
    {
      id: 20,
      capa:'',
      piloto:'Lando Norris',
      pais:'Reino Unido',
      equipe:'McLaren/Mercedes',
      pontos:'0',
    },
  ]
    ;
  return(

    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize:30, marginBottom: 20}}>Grid</Text>
      <View style={styles.content}>
         {livros.map((livro) =>(<Card livro={livro} key={livro.id}/>))}
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrondColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 40,
  },
  content: {
    flex: 1,
    backgroundColor:'#124',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  card:{
    backgroundColor:'#6F9AFA',
    width:'40%',
    maxHeight:290,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    marginTop:40,
    
  },
});
