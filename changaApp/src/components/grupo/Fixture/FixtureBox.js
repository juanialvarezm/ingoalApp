import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text,Image, ScrollView, TouchableOpacity } from "react-native";
import Index from "../../../screens/Index";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../context/GlobalContext";
import { useDispatch } from "react-redux";
import { fetchFixture } from "../../../features/fixtureActions"
import BottomTabNvigator from "../../../screens/Index";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


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
        <>
        <View style={{flex:1,paddingTop:25,backgroundColor:"#fff"}}>
            <ScrollView style={{backgroundColor:"#fff",position:"relative"}}>
            <TouchableOpacity style={{backgroundColor:"#134C34",padding:15.5,
                    borderRadius:20,width:50,
                    alignItems:"center",alignSelf:"center",marginBottom:10
                }}>
                    <FontAwesomeIcon icon={faPlus} color="#fff"/>
            </TouchableOpacity>
            {fixtureData?.partidos.map((p)=>(
            <View  key={p._id}>
                <View>
                    {/* {partido.partidos.map((p)=>( */}
                        <TouchableOpacity style={styles.partidoBox} key={p._id}>
                            <View style={styles.equipoLocalBox} >
                            <Image
                                source={{uri: p.equipoLocal.logo}}
                                style={{width:80,height:80}}
                                />

                                <Text style={{color:"#000", fontSize:15}}>{p?.resultadoLocal}</Text>
                                <Text >{p.equipoLocal?.nombre}</Text>

                            </View>
                            <View style={styles.equipoVisitanteBox} >
                            <Image 
                                source={{uri: p.equipoVisitante.logo}}
                                    style={{width: 80, height: 80}} />

                                <Text style={{color:"#000", fontSize:15}}>{p?.resultadoVisitante}</Text>
                                <Text>{p.equipoVisitante?.nombre}</Text>
                            </View>
                        </TouchableOpacity>
                    {/* ))} */}
                    </View>
            </View>
            ))}

            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    partidoBox:{
        backgroundColor:"#F9F4F4",
        // backgroundColor:"#C9E9D3",
        // backgroundColor:"#F2EDED",
        opacity:0.9,
        marginVertical:9,
        marginHorizontal:20,
        padding:15,
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