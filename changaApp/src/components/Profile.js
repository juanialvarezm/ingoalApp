import React, { useEffect } from 'react'
import { Text, View,StyleSheet, Image } from 'react-native'
import {useSelector} from "react-redux"
import profi from "../assets/20230123_213701.jpg"
import Button from 'react-native-button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFootball } from '@fortawesome/free-solid-svg-icons/faFootball'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { logout } from '../features/authSlice';
import { useDispatch } from 'react-redux';

const Profile = () => {
    const {error,userInfo,userToken} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(userInfo)
    },[])

    const logoutAc = ()=>{
        dispatch(logout())
    }

  return (
    <>
        <View style={styles.container}>

            <View style={styles.wrapperColumn}>
                <View style={styles.profileHeader}>
                    <View>
                        <Image
                        source={profi}
                        style={styles.profilePic}
                        />
                    </View>

                    <View style={styles.column}>
                        <View>
                            <Text style={styles.name}> {userInfo?.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.username}> @{userInfo?.username} </Text>
                        </View>
                    </View>
                    <View style={styles.amigos}>
                    <Button
                            containerStyle={{padding:9,width:60,
                                marginTop:10,
                                alignContent:"center",alignItems:"center", overflow:'hidden',  
                                borderRadius:10,borderColor:"#134c34",borderWidth:4, backgroundColor: '#134c34',marginLeft:40}}
                            disabledContainerStyle={{backgroundColor: 'grey'}}
                            style={{fontSize: 18, color: '#222'}}>
                                <Text style={{color:"#fff", fontSize:18,fontWeight:"bold"  }}>
                                #01 
                                </Text>
                            </Button>
                    </View>
                </View>
                <View style={styles.infoProfile}>
                            <View style={styles.club}>
                                <Button
                                    containerStyle={{padding:9,width:80,
                                        marginTop:10,
                                        alignContent:"center",alignItems:"center", overflow:'hidden',  
                                        borderRadius:30,borderColor:"#fff",borderWidth:4, backgroundColor: '#fff',marginLeft:20,}}
                                    disabledContainerStyle={{backgroundColor: 'grey'}}
                                    style={{fontSize: 18, color: '#222'}}>
                                        <Text style={{color:"#000", fontSize:18,fontWeight:"bold",paddingRight:7  }}>
                                        11
                                        </Text>
                                        <FontAwesomeIcon icon={faFootball} style={{color: "#000",}} />

                                    </Button>

                            </View>



                            <View style={styles.club}>
                                {/* <Text style={styles.textClub}>{userInfo?.club || "11"}</Text>
                                <FontAwesomeIcon icon={faFootball} style={{color: "#0e450d",}} />                         */}
                                        <Button
                                    containerStyle={{padding:9,width:90,height:50,
                                        marginTop:10,
                                        alignContent:"center",alignItems:"center", overflow:'hidden',  
                                        borderRadius:30,borderColor:"#fff",borderWidth:4, backgroundColor: '#fff',marginLeft:20,
                                    marginRight:15}}
                                    disabledContainerStyle={{backgroundColor: '#134c34'}}
                                    style={{fontSize: 18, color: '#222'}}>
                                        <Text style={{color:"#333", fontSize:18,fontWeight:"bold",paddingRight:7  }}>
                                        GEBA
                                        </Text>
                                        <FontAwesomeIcon icon={faFootball} style={{color: "#000",}} />

                                    </Button>

                            </View>
                        </View>
                        <View style={styles.editar}>
                                <View>
                                        <Button
                                    containerStyle={{padding:9,width:160,
                                        marginTop:10,
                                        alignContent:"center",alignItems:"center", overflow:'hidden',  
                                        borderRadius:30,borderColor:"#111",borderWidth:4, backgroundColor: '#fff',marginLeft:20,marginBottom:15}}
                                    disabledContainerStyle={{backgroundColor: 'grey'}}
                                    style={{fontSize: 18, color: '#111'}}>
                                        <Text style={{color:"#111", fontSize:18,fontWeight:"bold"  }}>
                                        Editar Perfil
                                        </Text>
                                    </Button>
                                </View>
                                <View>
                                        <Button
                                        onPress={logoutAc}
                                    containerStyle={{padding:9,width:55,height:50,
                                        marginTop:10,
                                        alignContent:"center",alignItems:"center", overflow:'hidden',
                                        borderRadius:30,borderColor:"#000",borderWidth:4, backgroundColor: '#fff',marginLeft:20,marginBottom:15}}
                                    disabledContainerStyle={{backgroundColor: 'grey'}}
                                    style={{fontSize: 18, color: '#222'}}>
                                        <FontAwesomeIcon style={styles.logout} icon={faRightFromBracket} />
                                    </Button>
                                </View>
                    </View>

            </View>
        </View>
        <View style={styles.historial}>
                <View>
                    <Text>jj</Text>
                </View>
            </View>

    </>
  )
}

const styles = StyleSheet.create({
    logout:{
        paddingTop:22,
        alignContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    editar:{
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",

    },
    club:{
        flexDirection:"row",
        alignContent:"center",
        alignItems:"center",

    },
    infoProfile:{
        flexDirection:"row",
        marginBottom:10,
        // justifyContent: 'space-around',
        alignItems:"center"
    },
    posicion:{
        borderRadius:30,
        width:120,
        height:60,
        alignItems:"center"
    },
    textClub:{
        alignContent:"center",
        alignItems:"center",
        textAlign:"center",
        color:"#000",
        fontFamily:"sans-serif",
        fontSize:18,
        paddingLeft:10,
        paddingRight:8,

    },
    wrapperColumn:{
        flexDirection:"column",
        borderBottomColor:"#134c34",
        borderBottomWidth:1.5,
        shadowColor:"#000",
        shadowOffset:5,
        marginTop:15,
    },
    container:{

        backgroundColor:"#fff",
    },
    profileTitle:{
        color:"#222",
        fontSize:30
    },
    profilePic:{
        width:70,
        height:70,
        borderRadius:35
    },
    profileHeader:{
     flexDirection:"row",
     paddingTop:5,
     paddingLeft:20,
     paddingBottom:8,
     borderRadius:15,

    },
    column:{
        paddingLeft:10,
        // flexDirection:"column",
        paddingRight:15
    },
    name:{
        fontSize:27,
        color:"#000",
        textAlign:"left",

    },
    username:{
        textAlign:"left",
        fontSize:18,
    },
    amigos:{
        paddingLeft:10,
        flexDirection:"column",
    },
    friends:{
        textAlign:"left",
        fontSize:18,
    },
    historial:{
        backgroundColor:"#f3f3f3",
        
    }
})

export default Profile