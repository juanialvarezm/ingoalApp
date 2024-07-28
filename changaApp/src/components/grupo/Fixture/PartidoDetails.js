import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { Tab } from '@rneui/base'

const PartidoDetails = () => {
  const [index,setIndex] = useState(0)

    const route = useRoute()
    const { param } = route.params;


    return (
    <View style={styles.partidoDetails}>
          <TouchableOpacity style={{backgroundColor:"#134c34",width:180,alignSelf:"center",alignItems:"center",
            marginTop:20,marginBottom:0,padding:15,borderRadius:15
          }}>
            <Text style={{color:"#fff"}}>Empezar partido</Text>
          </TouchableOpacity>
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
          <Tab 
          indicatorStyle={{
            backgroundColor: '#134C34',
            height: 3,
          }}
          style={{marginTop:20,marginHorizontal:30,borderRadius:10, backgroundColor:"#fff",elevation:5}} value={index} onChange={setIndex} dense>
            <Tab.Item  titleStyle={{color:"#000"}} style={{marginRight:80}}>Alumni</Tab.Item>
            <Tab.Item titleStyle={{color:"#000"}}>Geba</Tab.Item>
          </Tab>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  partidoDetails:{
    flex:1,
    backgroundColor:"#fff"
  },
  equipoDetails:{
    flexDirection:"row",
    justifyContent: 'center',
    marginTop:20,
    elevation:2,
    backgroundColor:"#f6f6f6",
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