import React,{useState} from 'react'
import {View,Text,StyleSheet} from "react-native"
import { Button } from '@rneui/base'
import { Tab } from '@rneui/themed';


const HomeScreen = () => {
  const [index,setIndex] = useState(0)
  return (
    <View style={styles.homeWrapper}>
      <Text>
      HomeScreen
      </Text>
      <Button title={"HomeScreen"}/>
      <Tab style={{marginTop:200,marginHorizontal:30,borderRadius:10, backgroundColor:"#fff",elevation:5}} value={index} onChange={setIndex} dense>
        <Tab.Item  titleStyle={{color:"#000"}} style={{marginRight:80}}>Alumni</Tab.Item>
        <Tab.Item titleStyle={{color:"#000"}}>Geba</Tab.Item>
      </Tab>
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