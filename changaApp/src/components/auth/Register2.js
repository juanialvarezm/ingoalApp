import React, { useEffect } from 'react'
import {Text,View, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Image} from "react-native"
import Button from 'react-native-button';
import futbol from "../../assets/basketball.png"
import trophy1 from "../../assets/trophy1.png"
import { GlobalState } from '../../context/GlobalContext';


const Register2 = ({navigation}) => {
    const {setClub,setPosicion,name} = GlobalState()
    
    useEffect(()=>{
        console.log(name)
    })
  return (
    <>
            <View style={styles.wrapperLogin}>
                <View style={styles.imageWrapper}>
                    {/* <Image 
                    style={styles.image}
                    source={trophy1}/> */}
                </View>
                <View style={styles.headerLogin}>
                    <Text style={styles.textLogin}>De que jugas?</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <View style={styles.bgColor}>
                        <View style={styles.grey}>
                            {/* <Text style={styles.label}>Nombre</Text> */}
                            <TextInput 
                                onChangeText={(value) => setPosicion(value)}                             
                                placeholder="Introduzca su posicion"
                              style={styles.input} />
                        </View>
                        <View style={styles.grey}>
                            {/* <Text style={styles.label}>Nombre</Text> */}
                            <TextInput 
                                onChangeText={(value) => setClub(value)}                             
                                placeholder="Introduzca su Club"
                             style={styles.input} />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <View style={styles.touchable} >
                    <Button
                    onPress={()=>navigation.navigate("Register3")}   
                    containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#134c34'}}
                        disabledContainerStyle={{backgroundColor: 'grey'}}
                        style={{fontSize: 19, color: 'white'}}>
                        Siguiente
                    </Button>
                    </View>
                    <View style={styles.touchable} >
                    </View>
                </View>
                <View style={styles.loginRegistrarse}>
                </View>

            </View>
        </>
    )  
}

const styles = StyleSheet.create({
    wrapperLogin:{
        fontSize:36,
        marginTop:5,
        position:"relative",
        height:710,
    },
    headerLogin:{
        justifyContent:"center",
        alignItems: 'center',
        marginTop:10,
        flexDirection:"row"
    },
    textLogin:{
        fontSize:36,
        color:"black",
        borderBottomColor:"#134c34",
        borderBottomWidth:3,
        paddingRight:8
    },
    imageWrapper:{
        alignContent: 'center',
        alignItems:"center",
        justifyContent:"center",
        marginTop:70
    },
    google:{
        backgroundColor:"lightblue",
        padding:10,
        borderRadius:8,
        color:"white"
    },
    image:{
        width:90,
        height:90
    },
    inputWrapper:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:50,
    },
    bgColor:{
        width:380,
        padding:10,  
    },
    input:{
        fontSize:18,
        color:"black",
    },
    buttonWrapper:{
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:1
    },
    touchable:{
        marginBottom:5,
        width:320,
        // height:200

    },
    loginButton:{
        padding:0,
        margin:0,
    },
    grey:{
        backgroundColor:"#d3d3d3",
        padding:8,
        borderRadius:8,
        marginTop:5,
    },
    loginRegistrarse:{
        bottom:0,
        justifyContent: 'center',
        alignItems:"center",
        alignContent:"center",
        marginTop:130
    }
})

export default Register2