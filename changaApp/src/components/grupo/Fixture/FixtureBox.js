import React, { useEffect } from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import Index from "../../../screens/Index";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../context/GlobalContext";
import { fetchFixture } from "../../../features/grupoSlice";
import { useDispatch } from "react-redux";


const FixtureBox = ({partido})=>{
    const {userGroup,fixtureDelGrupo,status} = useSelector((state)=>state.grupos)
    const {fixtureCategoria} = GlobalState()
    const dispatch = useDispatch()

    const cargarFixture = ()=>{
        try {
            dispatch(fetchFixture(fixtureCategoria,userGroup._id))
            console.log(status)       
            console.log(fixtureDelGrupo)       

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        cargarFixture()
    },[])

    return(
        <View style={{marginTop:60,flex:1,marginBottom:90}}>
        {/* {fixtureGroup.partidos?.map((partido)=>(
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
        ))} */}
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