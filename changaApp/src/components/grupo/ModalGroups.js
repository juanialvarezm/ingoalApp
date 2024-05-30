import React, { useEffect, useState } from "react"
import { StyleSheet,View,Text,Modal,TextInput } from "react-native"
import { GlobalState } from "../../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark"
import Button from "react-native-button"
import { joinGroup } from "../../features/grupoSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const ModalGroups = ()=>{
    const {setShowModal,codigo,setCodigo} = GlobalState()
    const dispatch = useDispatch()
    const {grupo} = useSelector((state)=>state.grupos)
    const {userInfo} = useSelector((state)=>state.auth)
    const {userGroup} = useSelector((state)=>state.auth)



    const joinGroupp = ()=>{
        try {

            dispatch(joinGroup(userInfo,codigo))
            // navigation.navigate("Home")

        } catch (error) {
          console.log(error.message)
        }
      }
  


    return(
        <>
                <View style={styles.modalContainerStyle}>
                    <View style={styles.closeButton}>
                    <Button containerStyle={{width:40, justifyContent: "flex-end",alignItems: 'flex-end',}} onPress={()=>setShowModal(false)}>
                        <FontAwesomeIcon color="#d3d3d3"  icon={faXmark} />
                    </Button>
                    </View>

                    <View style={styles.grey}>
                        <TextInput style={{height:45}} onChangeText={(value)=>setCodigo(value)} placeholder="Inserte el codigo del grupo"/>
                    </View>
                    <View >
                        <Button title="Cerrar" containerStyle={{backgroundColor:"#fff",width:80,height:40, borderRadius:5,
                        alignItems:"center",alignContent:"center",justifyContent: 'center',marginLeft:10,marginTop:10}}
                        onPress={()=>setShowModal(false)}>
                            <Button onPress={joinGroupp}>
                                <Text style={{color:"black"}}>Unirse</Text>

                            </Button>
                        </Button>

                    </View>

                </View>
        </>
    ) 
}

const styles = StyleSheet.create({
    closeButton:{
        justifyContent:"flex-end",
        alignSelf:"flex-end",
        paddingBottom:20
    },
    modalContainerStyle:{
        marginTop:200,
        width:320,
        backgroundColor:"#a8a8a8",
        justifyContent: 'center',
        alignSelf: 'center', 
        padding:15,
        borderRadius:25,
        paddingBottom:30,
    },
    grey:{
        margin:5,
        padding:1,
        borderRadius:12,

        backgroundColor:"#fff"

    }
})

export default ModalGroups