import React from 'react'
import { View,StyleSheet,Text,Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import GrupoHeader from './GrupoHeader'
import calendar from "../../assets/calendar.png"
import weight from "../../assets/weight.png"
import team from "../../assets/team.png"


const GrupoOptions = ({navigation}) => {
  return (
    <View style={styles.optionsContainer}>
        <View style={styles.headerContainer}>
            <GrupoHeader navigation={navigation}/>
        </View>
        <View style={styles.groupOptionsContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Citados")} style={styles.citados}>
                <View>
                    <View>
                        <Image 
                            source={team}
                            style={styles.citadosPic}
                            alt='Citados Pic'/>
                    </View>
                    <Text style={{color:"#000",textAlign:"center",fontSize:18}}>CITADOS</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Rutina")} style={styles.rutina}>
                <View >
                    <View>
                        <Image 
                            source={weight}
                            style={styles.rutinaPic}
                            alt='rutina Pic'/>
                    </View>
                    <Text style={{color:"#000",textAlign:"center",fontSize:18}}>RUTINA</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Fixture")} style={styles.fixture}>
                <View>
                    <View>
                        <Image 
                        source={calendar}
                        style={styles.fixturePic}
                        alt='Fixture Pic'/>
                    </View>
                    <Text style={{color:"#000",textAlign:"center",fontSize:18}}>FIXTURE</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    optionsContainer:{
        backgroundColor:"#f6f6f6",
        flex:1
    },
    groupOptionsContainer:{
        flex:1,
        alignContent:"center",
        alignItems:"center",
        justifyContent: 'center',
        // paddingTop:50
        // margin:20
    },
    citados:{
        width:200,
        alignItems:"center",
        padding:30,
        backgroundColor:"#F8F8F8",
        borderRadius:15,
        marginTop:10,
        elevation: 5,
        shadowColor: '#52006A', 
    },
    rutina:{
        width:200,
        alignItems:"center",
        padding:30,
        backgroundColor:"#F8F8F8",
        borderRadius:15,
        marginTop:15,
        elevation: 5,
        shadowColor: '#52006A',    
    },
    fixture:{
        width:200,
        alignItems:"center",
        padding:30,
        backgroundColor:"#F8F8F8",
        borderRadius:15,
        marginTop:15,
        elevation: 5,
        shadowColor: '#52006A',    
    },
    fixturePic:{

    }
})

export default GrupoOptions