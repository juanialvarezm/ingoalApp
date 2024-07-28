import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const PartidoDetails = () => {
    const route = useRoute()
    const { param } = route.params;


    return (
    <View style={styles.partidoDetails}>
        <View style={styles.equipoDetails}>
          <View style={styles.equipoLocalBox}>
          <Image
            source={{uri: param?.equipoLocal?.logo}}
            style={{width:90,height:90}}
            />     
            <Text>{param.equipoLocal?.nombre}</Text>
            <Text style={{color:"#000",fontSize:38}}> {param.resultadoLocal}</Text>

          </View>
          <View style={styles.equipoVisitanteBox}>
          <Image
            source={{uri: param?.equipoVisitante?.logo}}
            style={{width:90,height:90}}
            />        
            <Text> {param.equipoVisitante?.nombre}</Text>
            <Text style={{color:"#000",fontSize:38}}> {param.resultadoVisitante}</Text>

          </View>
        </View>
        <View style={{}}>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  partidoDetails:{
    flex:1,
    backgroundColor:"#f6f6f6"
  },
  equipoDetails:{
    flexDirection:"row",
    justifyContent: 'center',
    marginTop:50,
    elevation:5,
    backgroundColor:"#fff",
    borderRadius:25,
    padding:20,
    margin:20
  },
  equipoLocalBox:{
    paddingRight:70,
    alignItems:"center",
    alignContent:"center"
  },
  equipoVisitanteBox:{
    alignItems:"center",
    alignContent:"center"
  }
})

export default PartidoDetails