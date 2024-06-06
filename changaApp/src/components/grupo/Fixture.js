import React from 'react'
import {View, Text,StyleSheet, Image} from "react-native"
import { useSelector } from 'react-redux'
import Button from "react-native-button"
import confusing from "../../assets/confusing.png"


const Fixture = ({navigation}) => {
  const {userInfo} = useSelector((state)=>state.auth)
  const {userGroup} = useSelector((state)=>state.auth)

  

  return (
    <View style={styles.fixtureContainer}>
      {userGroup.admin == userInfo._id?(
        <>
          {userGroup?.partidos != null || userGroup?.partidos != undefined?(
            <>
            <Text>hay partidos</Text>
            {userGroup.admin == userInfo._id && (
              <Text>AGREGA MAS!!</Text>
            )}

            </>
            
        ):(
            <View style={styles.noHayFixture}>
              <Image
              source={confusing}
              alt='No fixture pic'
              style={styles.noFixturePic}/>
              <Text style={styles.noFixtureText}>No hay partidos...</Text>
              
              <View>
                <Button onPress={()=>navigation.navigate("CargarFixture")}>
                  Cargar Fixture
                </Button>
              </View>
            </View>
          )}
        </>
      ):(
        <>
          {userGroup?.partidos == null || userGroup?.partidos == undefined?(
            <View style={styles.noHayFixture}>
              <Image
              source={confusing}
              alt='No fixture pic'
              style={styles.noFixturePic}/>
              <Text style={styles.noFixtureText}>No hay partidossdksodksodk</Text>
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