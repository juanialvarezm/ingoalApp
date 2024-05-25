import React,{useState,useEffect, useReducer} from 'react'
import { useSelector } from 'react-redux'
import { View,StyleSheet,Text,Image, DrawerLayoutAndroid } from 'react-native'
import pic from "../../assets/20230123_213701.jpg"
import Button from 'react-native-button';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchGroup } from '../../features/authActions';

const GrupoHeader = ({navigation}) => {
  const dispatch = useDispatch()

    const {grupo} = useSelector((state)=>state.grupos)
    const {userInfo,userGroup} = useSelector((state)=>state.auth)

    const [grupoO ,setGrupoO]= useState([])

    const fetchGroupp = async()=>{
      try {
              const config = {
                  headers:{
                      "Content-Type":"application/json"
                  }
              } 
  
              const {data} = await axios.get(`http://10.0.2.2:5000/api/grupos/${userInfo.grupo}`,config)
              
              console.log("jjj")
              console.log(data)
              setGrupoO(data)
      } catch (error) {
        console.log(error.message)
          // return rejectWithValue(error.response?.data)
      }
  }


    useEffect(()=>{
      dispatch(fetchGroup(userInfo.grupo))
      console.log(userInfo.grupo)
      // fetchGroupp()
      console.log(grupo)
    },[])


    return (
    <View style={styles.headerContainer}>
      <View>
      <Button 
            onPress={()=>navigation.navigate("GrupoDetails")}   
            containerStyle={{padding:6, overflow:'hidden', borderRadius:2, backgroundColor: '#134c34'}}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            >
              <View
            style={styles.header}
            >
                  <Image
              alt='group pic'
              source={pic}
              style={styles.pic}/>
              <Text style={styles.title}>{grupo?.club?.toUpperCase()}</Text>
              <Text style={styles.title}>{userGroup?.club?.toUpperCase()}</Text>
              <Text style={styles.division}>{grupo?.division}</Text>
              <Text style={styles.division}>{userInfo?.grupo}</Text>

              </View>
        </Button>

      </View>
    </View>
  )
}

const styles =  StyleSheet.create({
    headerContainer:{
      // flex:1,
    },
    header:{
      // paddingTop:6,
      backgroundColor:"#134c34",
      flexDirection:"row",        
      alignContent:"center",
      alignItems:"center",
      height:70,
      paddingLeft:20,
      // borderBottomRightRadius:5,
      // borderBottomLeftRadius:5,
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