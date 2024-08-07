import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import { FAB, Tab } from '@rneui/base'
import Button from "react-native-button"


const PartidoDetails = () => {
  const [index,setIndex] = useState(0)
  const [empezo,setEmpezo] = useState(false)
  const [reanudar,setReanudar] = useState(false)
  const [indexView,setIndexView] = useState(0)

    const route = useRoute()
    const { param } = route.params;

    const fetchTries = ()=>{}
    

    useEffect(()=>{
      console.log(indexView)
    },[indexView])

    const buttons =[
      {title:"Resumen",index:0,function:fetchTries()},
      {title:"puntos",index:1,function:fetchTries()},
      {title:"Tries",index:2,function:fetchTries()}
    ]


    return (
    <View style={styles.partidoDetails}>
          {param?.empezo == false ?(
            <TouchableOpacity style={{backgroundColor:"#134c34",width:180,alignSelf:"center",alignItems:"center",
              marginTop:20,marginBottom:0,padding:15,borderRadius:15
            }}>
              <Text style={{color:"#fff"}}>Empezar partido</Text>
            </TouchableOpacity>
          ):(
            <>
              {reanudar?(
            <TouchableOpacity style={{backgroundColor:"red",width:180,alignSelf:"center",alignItems:"center",
              marginTop:20,marginBottom:0,padding:15,borderRadius:15
            }}
            onPress={()=>setReanudar(!reanudar)}>
              <Text style={{color:"#fff"}}>Pausar partido</Text>
            </TouchableOpacity>

              ):(
                <>
                <TouchableOpacity style={{backgroundColor:"#134c34",width:180,alignSelf:"center",alignItems:"center",
                    marginTop:20,marginBottom:0,padding:15,borderRadius:15
                  }} onPress={()=>setReanudar(!reanudar)}>
                    <Text style={{color:"#fff"}}>Reanudar partido</Text>
                </TouchableOpacity>
                
                </>
              )}
            </>
          )} 

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
          {reanudar == true?(
            <>
              <View >
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
            </>
          ):(
            <View style={{flexDirection:"row", marginHorizontal:30,marginTop:15}} >
              {buttons.map((button,idx)=>(
                <View key={idx} style={styles.partidoOpciones} >
                  <Text style={[indexView == idx ? styles.red : styles.blue]} onPress={()=>setIndexView(idx)}>{button.title}</Text>
                </View>
              ))}
          </View>
          )}
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
  },
  colortext:{
    color:"#222",
    fontSize:16
  },
  partidoOpciones:{
    padding:15,
  },
  red:{
    color:"black",
    backgroundColor:"red"
  },
  blue:{
    color:"black",
    backgroundColor:"blue"
  }
})

export default PartidoDetails
