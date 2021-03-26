import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
function HomePage() {
  
  const items = [
    {
      id: 0,
      name: "ROCKET LEAGUE",
      price: 15,
      imageUrl: "https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-s2-1200x1600-b1aecb2c82d9.jpg",
    },
    {
      id: 1,
      name: "AMONG US",
      price: 20,
      imageUrl: "https://cdn2.unrealengine.com/egs-amongus-innersloth-s6-1200x1600-675403712.jpg",

    },
    {
      id: 2,
      name: "GTA V",
      price: 25,
      imageUrl: "https://s3.gaming-cdn.com/images/products/4211/271x377/grand-theft-auto-v-premium-online-edition-cover.jpg",
    },
    {
      id: 3,
      name: "AC VALHALLA",
      price: 59,
      imageUrl: "https://image.jeuxvideo.com/medias/158826/1588264397-5261-jaquette-avant.jpg",
    },
    {
      id: 4,
      name: "RED DEAD 2",
      price: 70,
      imageUrl: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",
    },
    {
      id: 5,
      name: "CYBERPUNK 2077",
      price: 15,
      imageUrl: "https://s1.gaming-cdn.com/images/products/840/orig/cyberpunk-2077-cover.jpg",
    },
    {
      id: 6,
      name: "CONTROL",
      price: 59,
      imageUrl: "https://image.api.playstation.com/vulcan/img/cfn/11307xMxsC9RA7A8rQH4GiePP0BxYP_K8tJU1cWXe4eA189Q0ImmN8eZvJBx91eecK_vHIT2WZrrkqwKfiYvNGIu8NA2zvSV.png",
    },
    {
      id: 7,
      name: "ARK",
      price: 59,
      imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/0818/HVUPJTyjOslwxbwCC8edPC45.png",
    },
    {
      id: 8,
      price: 30,
      name: "THE WITCHER 3",
      imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png",
    },
  ];
  return (

    
    <View style={styles.Home}>
      
      <View style={styles.container}>
        <Image source={{ uri: "https://cdn.discordapp.com/attachments/643781626358267914/819228048624058388/1024px-Magicdelivery_gaming_logo.png" }} style={{ width: 100, height: 100 }} />
        <Text style={styles.textAc}>E-GAMES</Text>
        <Text style={styles.textAc}>ACCUEIL</Text>
        <Text style={styles.textAc}>MES_JEUX</Text>
        <Text style={styles.textAc}>MON_COMPTE</Text>
      </View>
      <Text style={styles.textTitre} >CATALOGUE</Text>

      {
        items.map((item) => {
          return <View key={item.name} style={styles.Liste}>
            <Image source={{uri:item.imageUrl}} style={[{ width: 100, height: 110 },styles.image]}></Image>
            <Text style={styles.textLi} >{item.name}</Text>
            <Text style={styles.textLi}>{item.price}</Text>
          </View>
        }
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  Home: {
    backgroundColor: 'black',
  },
  container: {
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexBasis: 'auto',
    backgroundColor: '#221E2B',
    padding: 3,
  },
  textAc: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#FF8A00',
  },
  textLi: {
    color: '#FF8A00',
    fontSize: 13,
    fontWeight: 'bold',
    padding: 6,
    textAlign:'center',
    
  },
  Liste: {
    flexDirection: 'column',
    padding: 1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center',
    flex:0,

  },
  textTitre: {
    color: '#FF8A00',
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  image:{
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  }
})
export default HomePage
