import React from 'react'
import { View,StyleSheet,Text,Image } from 'react-native'
import { useSelector } from 'react-redux'
import GrupoHeader from './GrupoHeader'
import calendar from "../../assets/calendar.png"
import weight from "../../assets/weight.png"
import team from "../../assets/team.png"

const GrupoOptions = () => {
  return (
    <View style={styles.optionsContainer}>
        <View style={styles.headerContainer}>
            <GrupoHeader/>
        </View>
        <View style={styles.groupOptionsContainer}>
            <View style={styles.citados}>
                <View>
                    <View>
                        <Image 
                            source={team}
                            style={styles.citadosPic}
                            alt='Citados Pic'/>
                    </View>
                    <Text>CITADOS</Text>
                </View>
            </View>
            <View style={styles.rutina}>
                <View>
                    <View>
                        <Image 
                            source={weight}
                            style={styles.rutinaPic}
                            alt='rutina Pic'/>
                    </View>
                    <Text>RUTINA</Text>
                </View>

            </View>
            <View style={styles.fixture}>
                <View>
                    <View>
                        <Image 
                        source={calendar}
                        style={styles.fixturePic}
                        alt='Fixture Pic'/>
                    </View>
                    <Text>CITADOS</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    optionsContainer:{
        flex:1
    },
    groupOptionsContainer:{
        flex:1,
        alignContent:"center",
        alignItems:"center",
        // paddingTop:50
        // margin:20
    },
    // citados:{
    //     flex:1
    // }
    citados:{
        width:200,
        alignItems:"center",
        padding:30,
        marginTop:55,
        backgroundColor:"#d9d9d9",
        borderRadius:15
    },
    rutina:{
        width:200,
        alignItems:"center",
        padding:30,
        backgroundColor:"#d9d9d9",
        borderRadius:15,
        marginTop:10,

    },
    fixture:{
        width:200,
        alignItems:"center",
        marginTop:10,
        padding:30,
        backgroundColor:"#d9d9d9",
        borderRadius:15

    }
})

export default GrupoOptions