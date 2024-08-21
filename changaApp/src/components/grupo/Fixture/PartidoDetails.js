import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import { FAB, Tab, TabView } from '@rneui/base'
import Button from "react-native-button"
import PartidoDetailsButtonTabs from './PartidoDetailsButtonTabs'


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
      {title:"Tries",index:2,function:fetchTries()},
      {title:"Conversiones",index:3,function:fetchTries()}
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
                <View style={{flexDirection:"row",justifyContent: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:"red",width:80,alignSelf:"center",alignItems:"center",
                    marginTop:20,marginBottom:0,padding:15,borderRadius:15
                  }}
                  onPress={()=>setReanudar(!reanudar)}>
                    <Text style={{color:"#fff"}}> -0-</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={{backgroundColor:"#134c34",width:80,alignSelf:"center",alignItems:"center",
                      marginTop:20,marginLeft:5,marginBottom:0,padding:15,borderRadius:15,elevation:5
                      }}
                    onPress={()=>setReanudar(!reanudar)}>
                      <Text style={{color:"#fff"}}>stop</Text>
                  </TouchableOpacity>

                </View>

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
              <View style={{flex:1}} >
              <Tab 
            indicatorStyle={{
              backgroundColor: '#134C34',
              height: 1,
            }}
            style={{marginTop:20,marginHorizontal:30,borderRadius:10, backgroundColor:"#fff",elevation:5}} value={index} onChange={setIndex} dense>
              <Tab.Item  titleStyle={{color:"#000"}} style={{marginRight:80}}>Alumni</Tab.Item>
              <Tab.Item titleStyle={{color:"#000"}}>Geba</Tab.Item>
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">

            <TabView.Item style={styles.tabItemContent}>
              <View>
                  <PartidoDetailsButtonTabs />
              </View>
        </TabView.Item>
      <TabView.Item style={styles.tabItemContent}>
        <View >     
          <PartidoDetailsButtonTabs />
          </View>
      </TabView.Item>
    </TabView>
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
    padding:5,
  },
  red:{
    padding:12,
    borderRadius:10,
    color:"#fff",
    backgroundColor:"#134c34"
  },
  blue:{
    padding:12,
    borderRadius:10,
    color:"black",
    backgroundColor:"#e9e9e9"
  },
  tabItemContent:{
     backgroundColor: '#f6f6f6',
      width: '86%',
      marginLeft:30,
      marginTop:1,
      borderRadius:5,
      marginTop:5,
  }
})

export default PartidoDetails
