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
        <View style={{paddingTop:60,flex:1,backgroundColor:"#F6F6F6"}}>
        {fixtureData?.map((partido)=>(
          <View  key={partido._id}>
            <View style={styles.fixtureBoxContainer}>
                {partido.partidos.map((p)=>(
                    <View style={styles.partidoBox} key={p._id}>
                        <View style={styles.equipoLocalBox} >
                            <Text style={{color:"#000", fontSize:15}}>{p?.resultadoLocal}</Text>
                            <Text >{p.equipoLocal.toUpperCase()}</Text>

                            {/* <Image
                            alt="Equipo Local foto"
                            source={p.equipoLocal?.logo}/> */}
                        </View>
                        <View style={styles.equipoVisitanteBox} >
                            <Text style={{color:"#000", fontSize:15}}>{p?.resultadoVisitante}</Text>
                            <Text>{p.equipoVisitante.toUpperCase()}</Text>

                            {/* <Image
                            alt="Equipo Local foto"
                            source={p.equipoLocal?.logo}/> */}

                        </View>
                    </View>
                ))}
                </View>
          </View>
        ))}
      </View>
    )
}

const styles = StyleSheet.create({
    partidoBox:{
        backgroundColor:"#F9F4F4",
        marginVertical:9,
        marginHorizontal:20,
        padding:30,
        borderRadius:10,
        elevation:5,
        flexDirection:"row",
        justifyContent:"center"

    },
    equipoLocalBox:{
        justifyContent:"center",
        alignItems:"center",
        paddingRight:150
    },
    equipoVisitanteBox:{
        alignItems:"center",

    }
})

export default FixtureBox