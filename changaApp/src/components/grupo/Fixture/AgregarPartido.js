import { View, Text,StyleSheet, TextInput,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import man from "../../../assets/ojo4.png" 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AgregarPartido = () => {
  return (
    <View style={styles.agregarPartidoContainer}>
      <View style={styles.agregarHero}>
        <Image
        source={man}
        style={{width:150,height:150}}/>
      </View>
        <View style={styles.inputContainer}>
          <View style={styles.textInputBox}>
              <TextInput placeholder='Geba' style={styles.input}/>
          </View>
          <View style={styles.textInputBox}>
              <TextInput placeholder='Sic' style={styles.input}/>
          </View>
          <View style={styles.textInputBox}>
              <TextInput placeholder='28/6' style={styles.input}/>
          </View>
          <View style={styles.textInputBox}>
              <TextInput placeholder='M19' style={styles.input}/>
          </View>

          <View style={styles.boxSubmitFixture}>
                <TouchableOpacity style={styles.buttonSubmitForm} >
                    <FontAwesomeIcon style={styles.arrowRight} color='#fff' icon={faArrowRight} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  agregarPartidoContainer:{
    flex:1,
    backgroundColor:"#fff"
  },
  agregarHero:{
    alignSelf:"center"
  },
  inputContainer:{
    margin:30,
    marginTop:50,
  },
  textInputBox:{
    elevation:2,
    borderRadius:5,
    // width:120,
    margin:4,
    backgroundColor:"#e9e9e9",
    padding:4,
    borderRadius:8,
  },
  input:{
    color:"black",
    fontSize:15,
  },
  boxSubmitFixture:{
    // justifyContent: "center",
    alignSelf:"center",
    width:50,

},
buttonSubmitForm:{
    backgroundColor:"#134c34",
    padding:7,
    borderRadius:8,
    marginTop:10,
    alignItems:"center"
},

})

export default AgregarPartido