import React, { useEffect } from 'react'
import {View, Text,StyleSheet, Image} from "react-native"
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-native-button"
import confusing from "../../../assets/confusing.png"
import { fetchPartidos } from '../../../features/grupoSlice'
import { fetchGroup } from '../../../features/grupoSlice'
import FixtureBox from '../partidos/FixtureBox'
import ElegirFixture from './ElegirFixture'

const Fixture = ({navigation}) => {
  const dispatch = useDispatch()

  const {userInfo} = useSelector((state)=>state.auth)

  //CAMBIAR DE USERGROUP AUTH A USERGROUP GRUPOS EN STORE
  const {userGroup,pp} = useSelector((state)=>state.grupos)


  
  useEffect(()=>{

    console.log(userGroup)
    // console.log(userGroup.admin[0].toString())
    // console.log(userInfo._id.toString())
  },[])

  return (
    <View style={styles.fixtureContainer}>
      {Array.isArray(userGroup?.fixture) && userGroup?.fixture.length > 0 ?(
            <>
              <ElegirFixture/>
            </>
      ):(
        <>
          {userGroup?(
            <View style={styles.noHayFixture}>
            <Image
            source={confusing}
            alt='No fixture pic'
            style={styles.noFixturePic}/>
            <Text style={styles.noFixtureText}>No hay fixture...</Text>

            <View>
              <Button onPress={()=>navigation.navigate("CrearFixture")}>
                Crear Fixture
              </Button>
            </View>
          </View>
          ):(
            <View style={styles.noHayFixture}>
            {/* <Image
            source={confusing}
            alt='No fixture pic'
            style={styles.noFixturePic}/> */}
            <Text style={styles.noFixtureText}>No hay partidossdksodksodk</Text>
            <Text >No hay partidossdksodksodk</Text>
          </View>

          )}   
        </>         
      )}
    </View>
  )
}

const styles= StyleSheet.create({
  fixtureContainer:{
    flex:1,
    backgroundColor:"#fff"
  },
  noFixturePic:{
    width:150,
    height:150,
  },
  noHayFixture:{
    flex:1,
    alignSelf: 'center',
    marginTop:130
  },
  noFixtureText:{
    color:"#444",
    fontSize:18,
    textAlign:"center",
    paddingTop:18  
  }
})

export default Fixture