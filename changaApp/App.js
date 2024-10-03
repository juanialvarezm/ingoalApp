import React, { useEffect } from 'react'
import { Text }from "react-native"
import Login from './src/components/auth/Login'
import IndexPage from './src/screens/Index'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import {createStackNavigator} from "@react-navigation/stack";

import Index from './src/screens/Index'
import LoginScreen from './src/screens/LoginScreen' 
import RegisterScreen from './src/screens/RegisterScreen'
import Register from './src/components/auth/Register'
import Register2 from './src/components/auth/Register2'
import Register3 from './src/components/auth/Register3'
import { Provider } from 'react-redux'
import {persistor, store} from "./src/app/store"
import { PersistGate } from 'redux-persist/lib/integration/react';
import GlobalContextProvider from './src/context/GlobalContext'
import GrupoScreen from './src/screens/GrupoScreen'
import Grupo from './src/components/grupo/Grupo'
import CrearGrupo from './src/components/grupo/CrearGrupo'
import Rutina from './src/components/grupo/rutina/Rutina'
import Fixture from './src/components/grupo/Fixture/Fixture'
import Citados from './src/components/grupo/citados/Citados'
import GrupoDetailsHeader from './src/components/grupo/GrupoDetailsHeader'
import CargarFixture from './src/components/grupo/Fixture/CargarFixture'
import FixtureBox from './src/components/grupo/partidos/FixtureBox'
import BottomTabNvigator from './src/screens/Index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen'
import IsAuthenticated from './src/helpers/IsAuthenticated'
import PartidoDetails from './src/components/grupo/partidos/PartidoDetails'
import { ThemeProvider, createTheme,lightColors} from '@rneui/themed';
import AgregarPartido from './src/components/grupo/Fixture/AgregarPartido'
import Icon from 'react-native-vector-icons/FontAwesome';
import PartidoDetailsButtonTabs from './src/components/grupo/partidos/PartidoDetailsButtonTabs'
import CrearFixture from './src/components/grupo/Fixture/CrearFixture'
import ElegirFixture from './src/components/grupo/Fixture/ElegirFixture'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator() 

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

const App = () => {

  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
          <GlobalContextProvider>
            <NavigationContainer>

            <Tab.Navigator screenOptions={{
            headerTintColor:"black",
            tabBarActiveTintColor:"#134c34",
            tabBarInactiveTintColor:"#222",
        }} 
            >
              <Tab.Screen  name="Home"  options={{headerTintColor: "#000",
                tabBarIcon:({focused})=>(
                  <Icon color={focused? "#134c34" :"#555"} name='home' size={30}/>
                )}} component={HomeScreen} />
              <Tab.Screen name="Chat" 
              options={{headerShown:false,
                tabBarIcon:(({focused})=>(
                  <Icon color={focused?"#134c34":"#555"} name='inbox' size={30} />
                ))
              }}
              >
              {()=>(
                <Stack.Navigator>
                    <Stack.Screen name='Index' component={Index}
                    options={{headerShown:false}} />
                    <Stack.Screen name='Register' component={Register} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register2' component={Register2} />
                    <Stack.Screen name='Register3' component={Register3} />
                    <Stack.Screen  name='CargarFixture' component={CargarFixture} />
                    <Stack.Screen name='CrearFixture' component={CrearFixture} />
                    <Stack.Screen name='CrearGrupo' component={CrearGrupo} />
                    <Stack.Screen name='ElegirFix' component={ElegirFixture} />

                  <Stack.Screen name='Rutina' component={Rutina} />
                  <Stack.Screen name='Fixture' component={Fixture} />
                  <Stack.Screen name='Citados' component={Citados} />
                  <Stack.Screen  name='GrupoDetails' component={GrupoDetailsHeader} />
                  <Stack.Screen  name='FixtureBox' component={FixtureBox} />
                  <Stack.Screen  name='PartidoDetails' component={PartidoDetails} />
                  <Stack.Screen  name='AgregarPartido' component={AgregarPartido} />
                  <Stack.Screen  name='aversifun' component={PartidoDetailsButtonTabs} />

                </Stack.Navigator>
              )}
              </Tab.Screen>
              <Tab.Screen name="Perfil"
               options={{headerShown:false,
                tabBarIcon:(({focused})=>(
                    <Icon color={focused ? "#134c34" :"#555"} name='user' size={30}/>

                ))
               }}
               component={IsAuthenticated} />
            </Tab.Navigator>

            </NavigationContainer>
            </GlobalContextProvider> 

          </ThemeProvider>
       </PersistGate>
      </Provider>
    )
}

export default App 