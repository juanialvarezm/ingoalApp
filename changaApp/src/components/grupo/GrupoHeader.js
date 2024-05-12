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
          <Text style={styles.title}>{grupo?.club?.toUpperCase()}</Text>
          <Text style={styles.division}>{grupo?.division}</Text>
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({
    headerContainer:{
      // flex:1,
    },
    header:{
      paddingTop:6,
      backgroundColor:"#134c34",
      flexDirection:"row",        
      alignContent:"center",
      alignItems:"center",
      height:70,
      paddingLeft:20,
      borderBottomRightRadius:5,
      borderBottomLeftRadius:5,
    },
    pic:{
      marginLeft:10,
      width:45,
      height:45,
      borderRadius:20
  },
  title:{
    alignItems:"center",
    paddingLeft:15,
    paddingRight:7,
    color:"#fff",
    fontSize:20
},
division:{
  alignItems:"center",

  paddingLeft:5,
  color:"#f3f3f3"
}
})



export default GrupoHeader