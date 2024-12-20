import React from 'react'
import {StyleSheet, View, Text} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MarcadorScreen from './GrupoScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import IsAuthenticated from '../helpers/IsAuthenticated'
import GrupoScreen from './GrupoScreen'
import Grupo from '../components/grupo/Grupo'
import Login from '../components/auth/Login'
import GrupoOptions from '../components/grupo/GrupoOptions'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// const Tab = createBottomTabNavigator() 
const Stack = createNativeStackNavigator()


const BottomTabNvigator = () => {
  return (
    <>
    {/* <Tab.Navigator> */}
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name={"GrupoScreen"} component={GrupoScreen}/>
    </Stack.Navigator>
      {/* <Tab.Screen name="Home" options={{headerTintColor: "#000",headerStyle: {backgroundColor: '#f0f0f0'},}} component={HomeScreen} /> */}
      {/* <Tab.Screen name="Chat" options={{headerShown:false,headerTintColor: "#000",headerStyle: {backgroundColor: '#f0f0f0'},}} component={GrupoScreen} /> */}
      {/* <Tab.Screen name="Perfil" options={{headerShown:false}} component={IsAuthenticated} /> */}
    {/* </Tab.Navigator> */}
    </>
  )
}


const styles = StyleSheet.create({
})

export default BottomTabNvigator