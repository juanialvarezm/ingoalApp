import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Login from '../components/auth/Login'
import { View,StyleSheet } from "react-native"
import Profile from '../components/Profile'

const IsAuthenticated = () => {
  const {error,userInfo,userToken} = useSelector((state)=>state.auth)

  useEffect(()=>{
    console.log(userInfo)

  },[])
  return (
    <View style={styles.flex}>
      {userInfo ==null || userInfo ==undefined ?(
         <Login/>
        ):(
          <Profile/>
      )} 

    </View>
  )
}

const styles = StyleSheet.create({
  flex:{
    flex:2,
    backgroundColor:"fff"
  }
})

export default IsAuthenticated