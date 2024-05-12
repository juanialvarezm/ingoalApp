import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import Grupo from '../components/grupo/Grupo'

const GrupoScreen = ({navigation}) => {
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