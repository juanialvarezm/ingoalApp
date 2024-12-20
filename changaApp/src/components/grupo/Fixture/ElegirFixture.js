import { View,StyleSheet, Text, TouchableOpacity } from "react-native"
import React, { useEffect } from 'react'
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { GlobalState } from "../../../context/GlobalContext"
import BottomTabNvigator from "../../../screens/Index"
import { fetchFixture } from "../../../features/fixtureActions"
import { useDispatch } from "react-redux" 
import Button from "react-native-button"
import { fetchGroup } from "../../../features/grupoSlice"

const ElegirFixture = () => {
    const navigation = useNavigation()
    const {userGroup,fixtureGroup} = useSelector((state)=>state.grupos)
    const {fixtureData} = useSelector((state)=>state.fixtures)
    const {fixtureCategoria,setFixtureCategoria} = GlobalState()
    const {userInfo} = useSelector((state)=>state.auth)


    const dispatch = useDispatch()

    const handleCategoria = (value)=>{
        try {
            setFixtureCategoria(value)
            // console.log(fixtureCategoria)
            navigation.navigate("FixtureBox")

        } catch (error) {
            console.log(error.message)
        }
    } 

    const fetchGupo = async()=>{
        try {
          dispatch(fetchGroup(userInfo._id))
      // console.log(userGroup)
        } catch (error) {
          console.log(error.message)
        }
      }


    useEffect(()=>{
        fetchGupo()
        console.log("loading fixture")
    },[userInfo])

    return (
    <View style={styles.elegirFixtureContainer}>
        <View style={styles.elegirFixtureBox}>
            {userGroup?.fixture.map((f)=>(
                <TouchableOpacity key={f._id} style={styles.fixtureBox} onPress={()=>handleCategoria(f.categoria)}>
                    <View  style={styles.categoriaFixtureBox}>
                        <Text style={{color:"#fff", textAlign:"center"}}>Fixture {f.categoria}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            <View>
              <Button onPress={()=>navigation.navigate("CrearFixture")}>
                Crear Fixture
              </Button>
            </View>
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
    },
})

export default ElegirFixture