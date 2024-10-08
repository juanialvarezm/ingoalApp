import React, { useEffect } from 'react'
import { View,StyleSheet, Text, TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import Button  from 'react-native-button'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { GlobalState } from '../../../context/GlobalContext'
import { useDispatch } from 'react-redux'
import { addPartidoAlFixture } from '../../features/grupoSlice'

const CargarFixture = () => {
    const dispatch = useDispatch()

    const { userGroup } = useSelector((state)=>state.auth)

    const {equipoLocal,equipoVisitante,
        setEquipoLocal,setEquipoVisitante,fechaPartido, setFechaPartido} = GlobalState()

        const agregarAlFixture = ()=>{
            try {
                dispatch(addPartidoAlFixture({grupoId:userGroup._id,equipoLocal,equipoVisitante,fechaPartido}))
    
            } catch (error) {
                throw new Error(error.message)                
            }
        }
  
    
    return (
    <View style={styles.cargarPartidoContainer}>
        <View style={styles.inputFixtureContainer}>
            <View style={styles.inputFixture}>
                <View style={styles.grey}>
                    <TextInput  
                        placeholder="Fecha del partido" style={styles.input} 
                        onChangeText={(value)=>setFechaPartido(value)}
                        />
                </View>
                <View style={styles.inputCheck}>
                    <Button>
                        {/* <FontAwesomeIcon icon={faCheck} /> */}
                    </Button>
                </View>

            </View>

            <View style={styles.inputFixture}>
                <View style={styles.grey}>
                    <TextInput  
                        placeholder="Equipo Visitante" style={styles.input} 
                        onChangeText={(value)=>setEquipoVisitante(value)}/>
                </View>
                <View style={styles.inputCheck}>
                    <Button>
                        {/* <FontAwesomeIcon icon={faCheck} /> */}
                    </Button>
                </View>

            </View>

            <View style={styles.inputFixture}>
                <View style={styles.grey}>
                    <TextInput  
                        placeholder="Equipo Local" style={styles.input}
                        onChangeText={(value)=>setEquipoLocal(value)}
                        />
                </View>
                <View style={styles.inputCheck}>    
                    <Button>
                        {/* <FontAwesomeIcon icon={faCheck} /> */}
                    </Button>
                </View>
            </View>
            <Button onPress={agregarAlFixture}>Agregar</Button>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cargarPartidoContainer:{
        backgroundColor:"#fff",
        flex:1
    },
    inputFixtureContainer:{
        paddingTop:140
    },
    inputFixture:{
        flexDirection:"row",
        padding:3,
    },
    grey:{
        flex:1,
        marginLeft:20,
        marginRight:20,
        // marginBottom:20,
        backgroundColor:"#e9E9E9",
        padding:4,
        borderRadius:8,
        marginTop:5,
    },
    inputCheck:{
        marginLeft:10,
        justifyContent:"center",
    }
})

export default CargarFixture