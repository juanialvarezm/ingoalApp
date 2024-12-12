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
import { useNavigation } from "@react-navigation/native";

const FixtureBox = ({partido})=>{
    const {userGroup} = useSelector((state)=>state.grupos)
    const {fixtureCategoria} = GlobalState()
    // const [cat,setCate] = useState("A")
    const dispatch = useDispatch()
    const {fixtureData,fixtureStatus} = useSelector((state)=>state.fixtures)
    const navigation = useNavigation()


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
            <TouchableOpacity onPress={()=>navigation.navigate("AgregarPartido")} style={{backgroundColor:"#134C34",padding:15.5,
                    borderRadius:20,width:50,
                    alignItems:"center",alignSelf:"center",marginBottom:10
                }}>
                    <FontAwesomeIcon icon={faPlus} color="#fff"/>
            </TouchableOpacity>
            {fixtureData?.partidos.map((p)=>(
            <View  key={p._id}>
                <View>
                    {/* {partido.partidos.map((p)=>( */}
                        <TouchableOpacity style={styles.partidoBox} 
                        onPress={()=>navigation.navigate("PartidoDetails",{
                            param:p
                        })}
                         key={p._id}>
                            <View style={styles.equipoLocalBox} >
                            <Image
                                // source={{uri: p.equipoLocal.logo}}
                                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphmMChzkTqNbEUPu7ElqKySzO_zHu1A7j9g&s"}}
                                style={{width: 60, height: 60,marginRight:20}}
                                />

                                <View style={{flexDirection:"column"}}>
                                    <Text style={styles.resultados}>{p?.resultadoLocal}</Text>
                                    <Text style={styles.clubText} >{p.equipoLocal?.nombre}</Text>
                                </View>

                            </View>
                            <View style={styles.equipoVisitanteBox} >
                            <Image 
                                source={{uri: p.equipoVisitante?.logo}}
                                    style={{width: 60, height: 60,marginRight:5}}
                                     />

                                <View style={{flexDirection:"column"}}>
                                    <Text style={styles.resultados}>{p?.resultadoVisitante}</Text>
                                    <Text style={styles.clubText}>{p.equipoVisitante?.nombre.toUpperCase()}</Text>
                                </View>

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
        backgroundColor:"#fff",
        opacity:0.9,
        marginVertical:9,
        marginHorizontal:20,
        paddingHorizontal:15,
        paddingVertical:25,
        borderRadius:10,
        elevation:10,
        flexDirection:"row",
        justifyContent:"center"

    },
    equipoLocalBox:{
        justifyContent:"center",
        alignItems:"center",
        paddingRight:20,
        flexDirection:"row"
    },
    equipoVisitanteBox:{
        alignItems:"center",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:0,
        flexDirection:"row"
    },
    clubText:{
        color:"#000",
        fontSize:16
    },
    resultados:{
        color:"#000", 
        fontSize:20
    }
})

export default FixtureBox