import React from "react"
import { StyleSheet,View,Text,Modal,TextInput } from "react-native"
import { GlobalState } from "../../context/GlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark"
import Button from "react-native-button"

const ModalGroups = ()=>{
    const {setShowModal} = GlobalState()
    return(
        <>
                <View style={styles.modalContainerStyle}>
                    <View style={styles.closeButton}>
                    <Button containerStyle={{width:40, justifyContent: "flex-end",alignItems: 'flex-end',}} onPress={()=>setShowModal(false)}>
                        <FontAwesomeIcon color="#d3d3d3"  icon={faXmark} />
                    </Button>
                    </View>

                    <View style={styles.grey}>
                        <TextInput style={{height:45}} placeholder="Inserte el codigo del grupo"/>
                    </View>
                    <View>
                        <Button title="Cerrar" containerStyle={{backgroundColor:"#fff",width:80,height:40, borderRadius:5,
                        alignItems:"center",alignContent:"center",justifyContent: 'center',marginLeft:10,marginTop:10}}
                        onPress={()=>setShowModal(false)}>
                            <Text style={{color:"black"}}>Unirse</Text>
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