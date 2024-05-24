import React from 'react'
import {View, Text,StyleSheet, Image} from "react-native"
import { useSelector } from 'react-redux'
import Button from "react-native-button"
import confusing from "../../assets/confusing.png"


const Fixture = () => {
  const {userInfo} = useSelector((state)=>state.auth)
  const {grupo} = useSelector((state)=>state.grupos)

  

  return (
    <View style={styles.fixtureContainer}>
      {userInfo?.isAdmin == grupo._id?(
        <>
          {grupo.fixture == null || grupo.fixture == undefined?(
            <Text>hay partidos</Text>
          ):(
            <View style={styles.noHayFixture}>
              <Image
              source={confusing}
              alt='No fixture pic'
              style={styles.noFixturePic}/>
              <Text style={styles.noFixtureText}>Carga los partidos</Text>
              
              <View>
                <Button>
                  Cargar Fixture
                </Button>
              </View>
            </View>
          )}
        </>
      ):(
        <>
          {grupo.fixture == null || grupo.fixture == undefined?(
            <View style={styles.noHayFixture}>
              <Image
              source={confusing}
              alt='No fixture pic'
              style={styles.noFixturePic}/>
              <Text style={styles.noFixtureText}>No hay partidos</Text>
            </View>
          ):(
            <Text>Si hay fixture</Text>
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