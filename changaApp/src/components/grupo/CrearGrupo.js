import React,{useState} from 'react'
import { Text,View,StyleSheet,TextInput, Image, TouchableOpacity } from 'react-native'
import court from "../../assets/ojo4.png"
import Button from "react-native-button"
import { useDispatch } from 'react-redux'
import {crearGrupo} from "../../features/grupoSlice"
import { useSelector } from 'react-redux'
import { searchUsers } from '../../features/authActions'
import { selectCurrentToken } from "../../features/authSlice";
import axios from "axios"
import pic from "../../assets/20230123_213701.jpg"
import { selectCurrentStatus } from '../../features/grupoSlice'

const CrearGrupo = () => {
  
  const {userInfo} = useSelector((state)=>state.auth)

  const dispatch = useDispatch()
  const [club,setClub] = useState("")
  const [division,setDivision] = useState("")
  const [admin,setAdmin] = useState(userInfo)

  const [jugadoresResult,setJugadoresResult] = useState([])
  const [jugadores,setJugadores] = useState([])
  const [userQuery,setUserQuery] = useState("")
  

  const searchUsers = async(query)=>{
    try {
        const config ={
          // Authorization:`Bearer ${selectCurrentToken}`,
          'Content-Type':'application/json',
        }
  
        const {data} = await axios.get(`http://10.0.2.2:5000/api/user/find?search=${query}`)
        console.log(data)
        setJugadoresResult(data)
  
    } catch (error) {
      return console.log(error.message)
    }
  }
  

  const addJugadores = async(value)=>{
    try {
      setJugadores([...jugadores, value]);
      // console.log(jugadoresAdded)
    } catch (error) {
      console.log(error.message)
    }
  }


  const createGroup = async()=>{
    try {
  
      dispatch(crearGrupo({club,division,jugadores,admin}))
      // console.log(nombreClub, divisionGrupo)
      console.log("grupo creado")

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <View style={styles.createGroupStyles}>
      <View style={styles.headerCreate}>
        <Image
        style={styles.image}
        source={court}/>
      </View>

      <View style={styles.inputCreate}>

      <View style={styles.grey}>
          <TextInput 
            onChangeText={(value) => setClub(value)}                             
            placeholder="Introduzca su Club"
            style={styles.input} />        
        </View>

        <View style={styles.grey}>
          <TextInput 
            onChangeText={(value)=>setDivision(value)}
            placeholder="Introduzca la division del grupo"
            style={styles.input} />        
        </View>

        <View style={styles.grey}>
          <TextInput 
          onChangeText={(value)=>searchUsers(value)}
            placeholder="Agregue jugadores"
            style={styles.input} />     
            <View style={styles.addedColumn}>
              {jugadores?(
                <View style={styles.addRowAdded}>
                  {jugadores.map((agregado,index)=>(
                      <View style={styles.jugadoresAgregados} key={index}>
                        <Image
                        source={pic}
                        style={styles.imagePic}/>
                        <Text style={styles.agregadoName}>{agregado.name}</Text>
                      </View>
                  ))}
                </View>
              ):(
                <></>
              )}
            </View>
            <View style={styles.addRow}>
                {jugadoresResult && (
                <View style={styles.userAddContainer}>
                  {jugadoresResult.map((jugador,index)=>(
                    <TouchableOpacity key={index} onPress={()=>addJugadores(jugador)} style={styles.userAdd}>
                      <View style={styles.flex} >
                        <Image  
                        source={pic}
                        style={styles.pic}/>
                        <Text>{jugador.name}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                
                </View>
              )}
            </View>
        </View>

        <TouchableOpacity onPress={createGroup}  style={{backgroundColor:"#134c34", width:40,height:35,alignItems:"center",
        justifyContent: 'center',borderRadius:10,marginTop:8}}>
          <Text style={{color:"#fff", fontSize:20}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pic:{
    width:30,
    height:30,
    borderRadius:25
  },
  createGroupStyles:{
    backgroundColor:"#fff",
    flex:1,
    alignItems:"center",
  },
  image:{
    width:100,
    height:100,
    marginBottom:0,
    marginTop:60
  },
  headerCreate:{
    alignItems:"center",      

  },
  inputCreate:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    padding:30,
    borderRadius:10,
    width:320
  },
  input:{
    fontSize:18,
    color:"black",
  },
  grey:{
    backgroundColor:"#d3d3d3",
    padding:8,
    borderRadius:8,
    marginTop:5,
    width:300
  },
  row:{
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
  },
  userAddContainer:{
    // backgroundColor:"red",
    width:285,
    flexWrap:"wrap",
    flexDirection:"row"
  },
  userAdd:{
    backgroundColor:"#FFF",
    borderRadius:10,
    padding:8,
    width:80,
    margin:3,
    flexDirection:"row"
  },
  addRow:{
    width:120,
    flexDirection:"row"
  },
  addRowAdded:{
    flexWrap:"wrap",
    width:285,
    flexDirection:"row"
  },
  imagePic:{
    width:30,
    height:30,
    borderRadius:20
  },
  addedColumn:{
    flexDirection:"row"  
  },
  jugadoresAgregados:{
    flexDirection:"row",
    marginTop:3,
    marginBottom:6,
    marginRight:0,
    marginLeft:3,
    backgroundColor:"#134c34",
    paddingTop:4,
    paddingBottom:4,
    paddingLeft:5,
    paddingRight:10,
    borderRadius:20,
    alignContent:"center",
    alignItems:"center",
  },
  agregadoName:{
    color:"#f6f6f6",
    paddingLeft:10,
    textAlign:"center",
    justifyContent:"center"
  }
})

export default CrearGrupo