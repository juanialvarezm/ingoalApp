import React, { useEffect } from 'react'
import { StyleSheet, Text, View,Image, FlatList, Dimensions  } from 'react-native'
import { useSelector } from 'react-redux'
import pic from "../../assets/20230123_213701.jpg"
import rugby from "../../assets/rugby.png"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import Button from "react-native-button"
import { useDispatch } from 'react-redux'
import { fetchGroup } from '../../features/authActions'
import { quitGroup } from '../../features/grupoSlice'


const GrupoDetailsHeader = ({navigation}) => {
  const dispatch = useDispatch()

  const {grupo} = useSelector((state)=>state.grupos)
  const {userInfo} = useSelector((state)=>state.auth)
  const {userGroup} = useSelector((state)=>state.auth)

  const fetchGupo = async()=>{
    try {
      dispatch(fetchGroup(userInfo._id))
  console.log(userGroup)
    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(()=>{
    fetchGupo()
  },[userInfo])

  const resettGrupo = async()=>{
    try {
        dispatch(quitGroup(userGroup._id,userInfo._id))
        navigation.navigate("Home")
    } catch (error) {
      throw new Error(error.message)
    }
  }

  useEffect(()=>{
    console.log(userGroup.jugadores)
  },[])

  const Item = ({ username,name }) => (
    <View style={styles.jugadores}>
      <Image source={pic} style={{width:35,height:35,borderRadius:20}}/>
      <Text style={styles.name}>{name} </Text>
      <Text style={styles.username}>@{username} </Text>
      <View>
      {userGroup.admin == userInfo._id ?(
        <Text>es admin</Text>
      ):(
        <Text>No es admin</Text>
      )}

      </View>
    </View>
  );
  
  
  const renderItem = ({ item }) => (
    <Item username={item.username} name={item.name}  />
  );

  
  return (
    <View style={styles.infoGroupContainer}>
      <View style={styles.headerGroupInfo}>
        <Image 
            style={styles.pic}
            alt={"SAMOAA"} 
            source={pic}
          />
        <Text style={{color:"#000",fontSize:20}}>{userGroup?.club}</Text>
        <Text style={{color:"#000",fontSize:18}}>{userGroup?.division?.toUpperCase()}</Text>
      </View>
      <View style={styles.estadisticas}>
        <View style={styles.headerRow}>
          <Image
          source={rugby}
          style={styles.manRunning}
          alt='Try Pic'/>

          <View>
            <Text>Goleadores</Text>
          </View>
        </View>
        
        <View style={styles.headerRow}>
          <Button
          onPress={resettGrupo}
            containerStyle={{padding:12,
            alignContent:"center",alignItems:"center", overflow:'hidden',
            borderRadius:30,borderColor:"#000",borderWidth:4,}}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={{fontSize: 18, color: '#222'}}>
            <FontAwesomeIcon style={styles.logout} icon={faRightFromBracket} />
        </Button>

        </View>

      </View>
      <View style={styles.players}>
        <View style={styles.jugadorBox}>
          <FlatList
          data={userGroup?.jugadores}
          renderItem={renderItem}
          key={(item) => item.id}
          />

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoGroupContainer:{
    flex:1,
    backgroundColor:"#f8f8f8",
  },
  headerGroupInfo:{
    margin:15,
    alignItems:"center"
  },
  pic:{
    width:90,
    height:90,
    borderRadius:40,
    marginBottom:5,
    marginTop:15
  },
  jugadorBox:{
    justifyContent: 'left',
    alignItems:"left",
    alignContent:"left"
  },
  jugadores:{
    alignItems:"center",
    flexDirection:"row",
    padding:8
  },
  players:{
    elevation: 5,
    shadowColor: '#000', 
    backgroundColor:"#134c34",
    padding:15,
    margin:8,
    borderRadius:10

  },
  estadisticas:{
    flexDirection:"row",
    padding:10
  },
  name:{
    fontSize:14
  },
  name:{
    color:"#fff",
    fontSize:18,
    paddingLeft:5
  },
  username:{
    color:"#a9a9a9",
    fontSize:14
  },
  manRunning:{
    width:30,
    height:30,
    alignSelf:"center",
    marginBottom:5
  },
  estadisticas:{
    flexDirection:"row"
  },
  headerRow:{
    flexDirection:"column",
    padding:20,
    paddingBottom:10,
  }
})


export default GrupoDetailsHeader