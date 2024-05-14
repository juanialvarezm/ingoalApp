import React, { useEffect } from 'react'
import { Text, View }from "react-native"
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
import Rutina from './src/components/grupo/Rutina'
import Fixture from './src/components/grupo/Fixture'
import Citados from './src/components/grupo/Citados'
import GrupoDetailsHeader from './src/components/grupo/GrupoDetailsHeader'


const Stack = createNativeStackNavigator()


const App = () => {

  return (
    <Provider store={store}>
          <PersistGate persistor={persistor}>
          <GlobalContextProvider>

            <NavigationContainer>
              <Stack.Navigator>

                  <Stack.Group>
                      <Stack.Screen name='Index' component={Index}
                    options={{headerShown:false}} />
                    <Stack.Screen name='Register' component={Register} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register2' component={Register2} />
                    <Stack.Screen name='Register3' component={Register3} />
                  </Stack.Group>

                  <Stack.Group screenOptions={{ presentation: "modal"}} options={{modalPresentationStyle:""}}>
                    <Stack.Screen name='CrearGrupo' component={CrearGrupo} />
                  </Stack.Group>

                <Stack.Group>
                  <Stack.Screen name='Rutina' component={Rutina} />
                  <Stack.Screen name='Fixture' component={Fixture} />
                  <Stack.Screen name='Citados' component={Citados} />
                  <Stack.Screen  name='GrupoDetails' component={GrupoDetailsHeader} />
                </Stack.Group>

              </Stack.Navigator>
            </NavigationContainer>
        </GlobalContextProvider>

            </PersistGate>
        </Provider>
    )
}

export default App 