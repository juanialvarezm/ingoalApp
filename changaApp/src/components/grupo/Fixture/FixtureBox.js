import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import Index from "../../../screens/Index";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../context/GlobalContext";
import { useDispatch } from "react-redux";
import { fetchFixture } from "../../../features/fixtureActions"


const FixtureBox = ({partido})=>{
    const {userGroup} = useSelector((state)=>state.grupos)
    const {fixtureCategoria} = GlobalState()
    const [cat,setCate] = useState("A")
    const dispatch = useDispatch()
    const {fixtureData,fixtureStatus} = useSelector((state)=>state.fixtures)

    const cargarFixture = ()=>{
        try {
            
            dispatch(fetchFixture("B","665a597ff36aae12e802489f"))
            console.log(fixtureStatus)       
            console.log(fixtureData)       

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        cargarFixture()
    },[])

    return(
        <View style={{marginTop:60,flex:1,marginBottom:90}}>
        {fixtureData?.map((partido)=>(
          <View style={{backgroundColor:"blue",flex:1}} key={partido._id}>
            <View style={styles.fixtureBoxContainer}>
                <View>
                    <Text>oooo</Text>
                </View>
                <View>
                    <Text>{partido.equipoLocal}</Text>
                    <Image 
                    source={partido.equipoLocal?.logo}
                    alt="Geba"/>
                </View>
                <View>
                    <Text>{partido.equipoVisitante}</Text>
                    <Image 
                    source={partido.equipoLocal?.logo}
                    alt="Cuba"/>

                </View>
            </View>
          </View>
        ))}
      </View>
    )
}

const styles = StyleSheet.create({
    fixtureBoxContainer:{
        backgroundColor:"red",
        flex:1,
        margin:10,
        borderRadius:5,
        elevation:15
    }
})

export default FixtureBox