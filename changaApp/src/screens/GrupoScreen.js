import React, { useEffect } from 'react'
import {View,Text,StyleSheet} from "react-native"
import Grupo from '../components/grupo/Grupo'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchGroup } from '../../features/grupoSlice'

const GrupoScreen = ({navigation}) => {
  const {userInfo} = useSelector((state)=> state.grupos)

  const fetchGupo = async()=>{
    try {
      dispatch(fetchGroup(userInfo._id))
  console.log(userGroup)
    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(()=>{
    fetchGupo()
  },[userInfo])




  return (
    <View style={styles.gruposWrappa}>
      <Grupo navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  gruposWrappa:{
    flex:1,
    backgroundColor:"#f6f6f6"
  }
})

export default GrupoScreen