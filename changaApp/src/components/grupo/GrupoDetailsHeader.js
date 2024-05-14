import React, { useEffect } from 'react'
import { StyleSheet, Text, View,Image, FlatList  } from 'react-native'
import { useSelector } from 'react-redux'
import pic from "../../assets/20230123_213701.jpg"
import manrunning from "../../assets/manrunning.png"

const GrupoDetailsHeader = () => {
  const {grupo} = useSelector((state)=>state.grupos)

  useEffect(()=>{
    console.log(grupo.jugadores)
  },[])

  const Item = ({ username,name }) => (
    <View style={styles.jugadores}>
      <Image source={pic} style={{width:35,height:35,borderRadius:20}}/>
      <Text style={styles.name}>{name} </Text>
      <Text style={styles.username}>@{username} </Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item username={item.username} name={item.name}  />
  );

  
  return (
    <View style={styles.infoGroupContainer}>
      <View style={styles.headerGroupInfo}>
        <Image 
            style={styles.pic}
            alt={"SAMOAA"} 
            source={pic}
          />
        <Text style={{color:"#000",fontSize:20}}>Geba</Text>
        <Text style={{color:"#000",fontSize:18}}>{grupo?.division.toUpperCase()}</Text>
      </View>
      <View style={styles.estadisticas}>
        <View>
          <Image
          source={manrunning}
          style={styles.manRunning}
          alt='Try Pic'/>
        </View>
        <View>
          <Text>Goleadores</Text>
        </View>
      </View>
      <View style={styles.players}>
        <View style={styles.jugadorBox}>
          <FlatList
          data={grupo.jugadores}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          />

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoGroupContainer:{
    flex:1,
    backgroundColor:"#f8f8f8",
  },
  headerGroupInfo:{
    margin:15,
    alignItems:"center"
  },
  pic:{
    width:90,
    height:90,
    borderRadius:40,
    marginBottom:5,
    marginTop:15
  },
  jugadorBox:{
    justifyContent: 'left',
    alignItems:"left",
    alignContent:"left"
  },
  jugadores:{
    alignItems:"center",
    flexDirection:"row",
    padding:6
  },
  players:{
    elevation: 5,
    shadowColor: '#000', 
    backgroundColor:"#134c34",
    padding:15,
    margin:8,
    borderRadius:10

  },
  estadisticas:{
    flexDirection:"row",
    padding:10
  },
  name:{
    fontSize:14
  },
  name:{
    color:"#fff",
    fontSize:18,
    paddingLeft:5
  },
  username:{
    color:"#a9a9a9",
    fontSize:14
  },
  manRunning:{
    width:40,
    height:40
  }
})


export default GrupoDetailsHeader