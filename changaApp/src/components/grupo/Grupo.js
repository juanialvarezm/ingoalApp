import React,{useEffect, useState} from 'react'
import { View,Text, StyleSheet, Image,Modal, TouchableOpacity } from "react-native"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { crearGrupo } from "../../features/grupoSlice"
import eye from "../../assets/ojo4.png"
import Button from 'react-native-button'
import ModalGroups from './ModalGroups'
import { GlobalState } from '../../context/GlobalContext'
import GrupoBox from './GrupoBox'
import  {io}  from 'socket.io-client'
import GrupoOptions from './GrupoOptions'

const socket = io('http://10.0.2.2:5000');


const Grupo = ({navigation}) => {
  const {showModal,setShowModal} = GlobalState()



    const dispatch = useDispatch()
    const { grupo } = useSelector((state)=>state.grupos)
    const { userInfo } = useSelector((state)=>state.auth)
    const { userGroup } = useSelector((state)=>state.grupos)

  
  return (
    <View style={styles.hiperCont}>
      {userInfo == null | userInfo == undefined?(
        <Text>No hay usuario</Text>
      ):(
        <>
          {!userGroup == userGroup == undefined || userGroup == null?(
            <View style={styles.container}>
                <>
                  <View style={styles.visual}>
                    <Image
                      source={eye}
                      style={styles.eyeIcon}
                      />
                      <Text style={styles.grupo}>No estas en ningun grupo</Text>
                  </View>
                  <View style={styles.buttons}>
                    <View style={styles.unirte}>
                      <Button 
                    onPress={()=>setShowModal(true)}

                              containerStyle={{padding:12,width:90, overflow:'hidden', borderRadius:20, backgroundColor: '#134c34'}}
                              disabledContainerStyle={{backgroundColor: 'white'}}
                              style={{fontSize: 18, color: 'white'}}
                      >
                        <Text style={{textAlign:"center", fontSize:18,color:"#fff"}}>
                            Unirte  
                        </Text>
                      </Button>
                    </View>
                    <View style={styles.crear}>
                    <Button
                    onPress={()=>navigation.navigate("CrearGrupo")} 
                              containerStyle={{padding:12,width:90, overflow:'hidden', borderRadius:20, backgroundColor: '#000'}}
                              disabledContainerStyle={{backgroundColor: 'white'}}
                              style={{fontSize: 18, color: 'white'}}
                      >
                        <Text style={{textAlign:"center", fontSize:18,color:"#fff"}}>
                            Crear
                        </Text>
                      </Button>
                    </View>
                  </View>
                </>
              <Modal visible={showModal}  animationType='fade'>
                  <ModalGroups/>
              </Modal>
            </View>

        ):(
          <>
                        <View style={styles.grupoBox}>
                        <GrupoOptions navigation={navigation} grupo={grupo}/>
                      </View>            
          </>
        )}
        </>
      )}        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  hiperCont:{
    flex:1,
    // backgroundColor:"blue"
  },
  visual:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:"center",
    marginTop:85,
    padding:0,
    flex:1
  },
  eyeIcon:{
    width:180,
    height:140,
    marginBottom:0,

  },
  grupo:{
    color:"#333",
    fontSize:19,
    padding:0,
    margin:0,
    width:210,
    textAlign:"center",

  },
  buttons:{
    // marginTop:100,
    marginBottom:200,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  unirte:{
    paddingRight:10
  },
  grupoBox:{
    flex:1,
    // backgroundColor:"red"
  }
})

export default Grupo