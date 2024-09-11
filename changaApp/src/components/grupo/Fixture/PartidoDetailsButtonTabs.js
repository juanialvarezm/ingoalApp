import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, TextInput, Button } from 'react-native'
import { FAB, Tab, TabView } from '@rneui/base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { GlobalState } from '../../../context/GlobalContext'
import { useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { actualizarPuntos } from '../../../features/partidoActions'

const buttons = [
  {title:"Try", index:0},
  {title:"Penal", index:0},
  {title:"Tarjeta", index:0},
]

const PartidoDetailsButtonTabs = () => {
  const [puntoJugador,setPuntoJugador] = useState() 
  const [punto,setPunto] = useState() 

  const route = useRoute()
  const { param } = route.params;
  
  const dispatch = useDispatch()

  const [indexx,setIndexx] = useState(0)
  // const {punto,setPunto} = GlobalState()

  const handlePuntotype = (value)=>{
    setPunto(value)
    console.log(punto)
    console.log(param.equipoVisitante)
  }

  const actualizarPuntoss = ()=>{
    try {

      // dispatch(actualizarPuntos({tipo:punto,partido:param._id}))
      dispatch(actualizarPuntos({tipo:punto,partido:param._id}))
      console.log(punto)
      console.log(param._id)
      console.log(puntoJugador)
      
    } catch (error) {
      // throw new Error(error.message)
      console.log(error.message)
    }
  }

  return (
    <>
      <View style={styles.anotadorContainer}>
        <View style={styles.showModal}>

        {buttons.map((button,idx)=>(
          <View key={idx}  >
          <TouchableOpacity onPress={()=>handlePuntotype(button.title)} style={styles.categoriesPoints}>
              <Text style={styles.categoriesPointsText}>{button.title}</Text>
              <FontAwesomeIcon color='#000' icon={faPlus} />
            </TouchableOpacity>
          </View>
        ))}
              <Text>{punto}</Text>


        </View>

        <View style={styles.puntosIcons}>

        </View>
        <View style={styles.puntosInutContainer}>
          <TextInput style={styles.puntoInut} value={puntoJugador} placeholder='Felipe Contepomi'/>
        </View>

        <View>
          <Button onPress={actualizarPuntoss} title='ok'/>
        </View>

      </View>
    </>

  )
}

const styles = StyleSheet.create({
  showModal:{
    justifyContent: 'center',
  },
  anotadorContainer:{
  },
  puntosInutContainer:{
    elevation:3,
    backgroundColor:"#fff",
    width:310,
    borderRadius:10,
    marginTop:15,
    marginLeft:20,
    color:"#000"
  },
  showModal:{
    flexDirection:"row",
    justifyContent:"space-around"
  },
  categoriesPoints:{
    flexDirection:"row",
    backgroundColor:"#D1D1D1",
    elevation:5,
    borderRadius:20,
    width:80,
    alignItems:"center",
    // alignContent:"center",
    justifyContent: 'center',
    padding:12,
    marginTop:10
  },
  categoriesPointsText:{
    color:"#000"
  }
})

export default PartidoDetailsButtonTabs