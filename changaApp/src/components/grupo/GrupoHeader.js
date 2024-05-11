import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { View,StyleSheet,Text,Image } from 'react-native'
import pic from "../../assets/20230123_213701.jpg"


const GrupoHeader = () => {
    const {grupo} = useSelector((state)=>state.grupos)


    return (
    <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
          alt='group pic'
          source={pic}
          style={styles.pic}/>
          <Text style={styles.title}>{grupo.club.toUpperCase()}</Text>
          <Text style={styles.division}>{grupo.division}</Text>
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({
    headerContainer:{
      // flex:1,
    },
    header:{
      backgroundColor:"#134c34",
      marginBottom:25,
      flexDirection:"row",        
      alignContent:"center",
      alignItems:"center",
      height:60,
    },
    pic:{
      marginLeft:10,
      width:40,
      height:40,
      borderRadius:20
  },
  title:{
    paddingLeft:10,
    paddingRight:7,
    color:"#fff",
    fontSize:20
},
division:{
  color:"#d3d3d3"
}
})



export default GrupoHeader