import React,{useState} from 'react'
import {View,Text,StyleSheet} from "react-native"
import { Button } from '@rneui/base'
import { Tab } from '@rneui/themed';


const HomeScreen = () => {
  const [index,setIndex] = useState(0)
  return (
    <View style={styles.homeWrapper}>

    </View>
  )
}

const styles = StyleSheet.create({
  // homeWrapper:{
  //   backgroundColor:"#fff",
  //   flex:1
  // }
})

export default HomeScreen