import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { View,StyleSheet,Text } from 'react-native'


const GrupoHeader = () => {
    const {grupo} = useSelector((state)=>state.grupos)


    return (
    <View>
        
    </View>
  )
}

export default GrupoHeader