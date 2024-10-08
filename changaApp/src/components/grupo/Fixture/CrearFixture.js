import { View, Text, StyleSheet,TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Button from "react-native-button"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import calendarPen from "../../../assets/calendarPen.png"
import { GlobalState } from '../../../context/GlobalContext'
import { useDispatch } from 'react-redux'
import { crearFixture } from '../../../features/fixtureActions'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const CrearFixture = () => {
    const dispatch = useDispatch()
    const {equipoFixture,setEquipoFixture} = GlobalState()
    
    const navigation = useNavigation()
    const {userGroup} = useSelector((state)=>state.grupos)

        const crearrFixture = ()=>{
            try {
                dispatch(crearFixture({grupo:userGroup,categoria:equipoFixture}))
                navigation.navigate("ElegirFix")
            } catch (error) {
                console.log(error)
            }
        }

  return (
    <View style={styles.crearFixtureContainer}>
         <View style={{alignSelf: 'center',marginTop:90}}>
            <Image
            style={{height:140,width:140}}
            source={calendarPen}/>
        </View>

        <View style={styles.boxbox}>
            <View style={styles.crearFixtureCardBox}>
                <View>
                    <View style={styles.containerInputFields}>
                        <TextInput placeholder='Equipo a' onChangeText={(value)=>setEquipoFixture(value)} />
                    </View>
                </View>
            </View>
            <View style={styles.boxSubmitFixture}>
                <TouchableOpacity style={styles.buttonSubmitForm} onPress={crearrFixture}>
                    <FontAwesomeIcon style={styles.arrowRight} color='#fff' icon={faArrowRight} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    crearFixtureContainer:{
        flex:1,
        backgroundColor:"#f6f6f6"
        
    },
    boxbox:{
        flex:1,
        // justifyContent: 'center',
        marginTop:40
    },
    crearFixtureCardBox:{
        // justifyContent:"center",
        alignSelf:"center",
    },
    containerInputFields:{
        backgroundColor:"#e5e5e5",
        margin:6,
        elevation:2,
        borderRadius:8,
        width:250
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

export default CrearFixture