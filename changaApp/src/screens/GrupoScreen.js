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
    flex:1
  }
})

export default GrupoScreen