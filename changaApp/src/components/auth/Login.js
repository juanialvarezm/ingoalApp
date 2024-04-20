import React from "react"
import {Text,View, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Image} from "react-native"
import Button from 'react-native-button';
import futbol from "../../assets/basketball.png"
import trophy1 from "../../assets/trophy1.png"
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { GlobalState } from "../../context/GlobalContext";
import { login } from "../../features/authActions";
import {useSelector} from "react-redux"

const Login = ()=>{
    const {setName,name,password,setPassword} = GlobalState()


    const dispatch = useDispatch()
    const navigation = useNavigation()
    const {error,userInfo,userToken} = useSelector((state)=>state.auth)
 

    const loginUser = async ()=>{
        try {

            dispatch(login({name,password}))
            console.log("userInfo")            
            console.log(userInfo)
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <>
            <View style={styles.wrapperLogin}>
                <View style={styles.imageWrapper}>
                    <Image 
                    style={styles.image}
                    source={trophy1}/>
                </View>
                {/* <View style={styles.headerLogin}>
                    <Text style={styles.textLogin}>CHANGA</Text>
                </View> */}
                <View style={styles.inputWrapper}>
                    <View style={styles.bgColor}>
                        <View style={styles.grey}>
                            {/* <Text style={styles.label}>Nombre</Text> */}
                            <TextInput
                            onChangeText={(value)=>setName(value)} 
                            placeholder="Introduzca su nombre"
                             style={styles.input} />
                        </View>
                        <View style={styles.grey}>
                            <TextInput
                            onChangeText={(value)=>setPassword(value)} 
                            placeholder="Introduzca su contrasena"
                             style={styles.input}/>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <View style={styles.touchable} >
                    <Button
                    onPress={loginUser}
                        containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#134c34'}}
                        disabledContainerStyle={{backgroundColor: 'grey'}}
                        style={{fontSize: 19, color: 'white'}}>
                        Login
                    </Button>
                    </View>
                    <View style={styles.touchable} >
                    <Button
                        containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:8, backgroundColor: '#fff'}}
                        disabledContainerStyle={{backgroundColor: 'grey'}}
                        style={{fontSize: 19, color: '#222'}}>
                        Perdiste la contrasena?
                    </Button>
                    </View>
                </View>
                <View style={styles.loginRegistrarse}>
                    <Button
                    onPress={() => navigation.navigate("Register")}
                    containerStyle={{padding:10,width:200,alignContent:"center",alignItems:"center", overflow:'hidden',  borderRadius:8,borderColor:"#134c34",borderWidth:4, backgroundColor: '#fff'}}
                    disabledContainerStyle={{backgroundColor: 'grey'}}
                    style={{fontSize: 19, color: '#222'}}>
                        <Text style={{color:"#134c34", fontSize:20,fontWeight:"bold"  }}>
                        Registrate
                        </Text>
                    </Button>
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
        marginTop:0
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
        marginTop:90
    }
})

export default Login 