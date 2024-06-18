import { View,StyleSheet, Text, TouchableOpacity } from "react-native"
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import {fetchFixture} from "../../../features/grupoSlice"
import { useNavigation } from "@react-navigation/native"
import { GlobalState } from "../../../context/GlobalContext"


const ElegirFixture = () => {
    const navigation = useNavigation()
    const {userGroup,fixtureGroup} = useSelector((state)=>state.grupos)
    const {fixtureCategoria,setFixtureCategoria} = GlobalState()


    const handleCategoria = (value)=>{
        try {
            setFixtureCategoria(value)
            navigation.navigate("FixtureBox")

        } catch (error) {
            console.log(error.message)
        }
    } 

    useEffect(()=>{

        // console.log(fixtureGroup)   
    },[])

    return (
    <View style={styles.elegirFixtureContainer}>
        <View style={styles.elegirFixtureBox}>
            {userGroup?.fixture.map((f)=>(
                <TouchableOpacity key={f._id} onPress={()=>handleCategoria(f.categoria)}>
                    <View  style={styles.categoriaFixtureBox}>
                        <Text style={{color:"#fff", textAlign:"center"}}>Fixture {f.categoria}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    elegirFixtureContainer:{
        backgroundColor:"#f6f6f6",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    categoriaFixtureBox:{
        backgroundColor:"#134c34",
        width:280,
        height:45,
        margin:5,
        padding:5,
        borderRadius:10,
        justifyContent:"center",

    }
})

export default ElegirFixture