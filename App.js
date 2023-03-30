import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput, imp} from 'react-native';

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
      <TextInput />
      <Button onPress={() => this.increment()} title="Like"/>
      <Button onPress={() => this.decrement()} title="Dislike"/>
      
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
      capa:'https://th.bing.com/th/id/OIP.UbsA4yrqxbGMpFHOOgsBiAHaE8?pid=ImgDet&rs=1',
      piloto:'Sergio Pérez',
      pais:'México',
      equipe:'RBR/Honda',
      pontos:'43',
    },
    {
      id: 3,
      capa:'https://th.bing.com/th/id/R.6d14736ec44a2da019ddb9766639597c?rik=%2fORt2uefPU61Ow&pid=ImgRaw&r=0',
      piloto:'Fernando Alonso',
      pais:'Espanha',
      equipe:'Aston Martin/Mercedes',
      pontos:'30',
    },
    {
      id: 4,
      capa:'https://th.bing.com/th/id/OIP.EXno2XFf7H3dlfPAzzRcJQHaE8?pid=ImgDet&rs=1',
      piloto:'Carlos Sainz',
      pais:'Espanha',
      equipe:'Ferrari',
      pontos:'20',
    },
    {
      id: 5,
      capa:'https://th.bing.com/th/id/OIP.vK9LRJejJN6kgxeKk3JAeAHaE8?pid=ImgDet&rs=1',
      piloto:'Lewis Hamilton',
      pais:'Reino Unido',
      equipe:'Mercedes',
      pontos:'20',
    },
    {
      id: 6,
      capa:'https://th.bing.com/th/id/OIP.Tb7bMNjB2G0YaQ3cx0dKbgHaFj?pid=ImgDet&rs=1',
      piloto:'George Russell',
      pais:'Reino Unido',
      equipe:'Mercedes',
      pontos:'18',
    },
    {
      id: 7,
      capa:'https://imagesvc.timeincapp.com/v3/fan/image?url=https://beyondtheflag.com/wp-content/uploads/getty-images/2016/04/1065171702.jpeg&',
      piloto:'Lance Stroll',
      pais:'Canadá',
      equipe:'Aston Martin/Mercedes',
      pontos:'8',
    },
    {
      id: 8,
      capa:'https://th.bing.com/th/id/R.c57196d0d960caaa0ef5c40b9d2966e5?rik=aEUutIXjrOpMxQ&pid=ImgRaw&r=0',
      piloto:'Charles Leclerc',
      pais:'Italia',
      equipe:'Ferrari',
      pontos:'6',
    },
    {
      id: 9,
      capa:'https://th.bing.com/th/id/OIP.5_PSVlrxluYw0TYghVOX2QHaHL?pid=ImgDet&rs=1',
      piloto:'Valtteri Botas',
      pais:'Finlândia',
      equipe:'Alfa Romeo/Ferrari',
      pontos:'4',
    },
    {
      id: 10,
      capa:'https://th.bing.com/th/id/R.428cdbc1d6bd163418feaa36f4baa431?rik=RQo0penAh%2bVt2Q&pid=ImgRaw&r=0',
      piloto:'Estaban Ocon',
      pais:'França',
      equipe:'Alpine/Renault',
      pontos:'4',
    },
    {
      id: 11,
      capa:'https://www.sportbusinessmag.com/wp-content/uploads/2018/08/Pierre-Gasly-poursuit-son-ascension-et-pilotera-pour-Red-Bull-en-2019.jpg',
      piloto:'Pierre Gasly',
      pais:'França',
      equipe:'Alpine/Renault',
      pontos:'4',
    },
    {
      id: 12,
      capa:'https://th.bing.com/th/id/R.05be3f004034c0398433af7a9ca137e3?rik=DtA59iD730NaLA&riu=http%3a%2f%2fwww.f1i.com%2fwp-content%2fuploads%2f2016%2f10%2fKevin-Magnussen-Crop.jpg&ehk=OeWOunIMZ2lKfA8JOkK%2bMMES1OlftA5waXqN11kFUMw%3d&risl=&pid=ImgRaw&r=0',
      piloto:'Kevin Magnussen',
      pais:'Dinamarca',
      equipe:'Haas/Ferrari',
      pontos:'1',
    },
    {
      id: 13,
      capa:'https://th.bing.com/th/id/OIP.t8t_o7HZjNrEgaS95YgMfAHaEK?pid=ImgDet&rs=1',
      piloto:'Alexander Albon',
      pais:'Tailândia',
      equipe:'Williams/Mercedes',
      pontos:'1',
    },
    {
      id: 14,
      capa:'https://th.bing.com/th/id/OIP.Cg6mq-pQfGcJEA3PiGXV4QHaE8?pid=ImgDet&rs=1',
      piloto:'Yuki Tsunoda',
      pais:'Japão',
      equipe:'AlphaTauri/Honda',
      pontos:'0',
    },
    {
      id: 15,
      capa:'https://th.bing.com/th/id/OIP.qG-TLu8MHkdFb2vltOWJNgHaE8?pid=ImgDet&rs=1',
      piloto:'Nico Hulkenberg',
      pais:'Alemãnha',
      equipe:'Haas/Ferrari',
      pontos:'0',
    },
    {
      id: 16,
      capa:'https://th.bing.com/th/id/OIP.IOCaAwzQAeBoGqV8TXnL4AHaEt?pid=ImgDet&rs=1',
      piloto:'Logan Sargeant',
      pais:'Estados Unidos',
      equipe:'Willias/Mercedes',
      pontos:'0',
    },
    {
      id: 17,
      capa:'https://th.bing.com/th/id/R.862d04567fd35a5b6dad498bf11257a6?rik=Et0SOVMfPxnDNQ&pid=ImgRaw&r=0',
      piloto:'Guanyu Zhou',
      pais:'China',
      equipe:'Alfa Romeo/Ferrari',
      pontos:'0',
    },
    {
      id: 18,
      capa:'https://th.bing.com/th/id/OIP.x7jOvQmLm7MSNdL9ulF71AHaGc?pid=ImgDet&rs=1',
      piloto:'Nyck de Vries',
      pais:'Holanda',
      equipe:'AlphaTauri/Honda',
      pontos:'0',
    },
    {
      id: 19,
      capa:'https://th.bing.com/th/id/OIP.Lb2_XepHX7jEIE1TGeH3qAHaE8?pid=ImgDet&rs=1',
      piloto:'Oscar Piastri',
      pais:'Australia',
      equipe:'McLaren/Mercedes',
      pontos:'0',
    },
    {
      id: 20,
      capa:'https://www.telegraph.co.uk/content/dam/formula-1/2019/07/12/TELEMMGLPICT000203559837_trans%2B%2BpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg',
      piloto:'Lando Norris',
      pais:'Reino Unido',
      equipe:'McLaren/Mercedes',
      pontos:'0',
    },
  ];

  return(
    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize:30, marginBottom: 20}}>Grid F1</Text>
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
    flexWrap:'wrap',
  },
  card:{
    backgroundColor:'#6F9AFA',
    width:'70%',
    maxHeight:400,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
    marginTop:40,
    
  },
});
