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
    // const [cat,setCate] = useState("A")
    const dispatch = useDispatch()
    const {fixtureData,fixtureStatus} = useSelector((state)=>state.fixtures)

    const cargarFixture = ()=>{
        try {
            
            // dispatch(fetchFixture({categoria:fixtureCategoria,grupo:userGroup._id}))
            dispatch(fetchFixture({categoria:fixtureCategoria,grupo:userGroup._id}))
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
          <View  key={partido._id}>
            <View style={styles.fixtureBoxContainer}>
                {partido.partidos.map((p)=>(
                    <View>
                        <Text>{p.equipoLocal}</Text>
                        <Text>{p.equipoVisitante}</Text>
                    </View>
                ))}
                </View>
          </View>
        ))}
      </View>
    )
}

const styles = StyleSheet.create({
})

export default FixtureBox