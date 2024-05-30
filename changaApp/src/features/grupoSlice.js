import { createSlice } from "@reduxjs/toolkit";
import { selectCurrentToken } from "./authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
// import {crearGrupo} from "./grupoActions"

// import { createSlice } from "@reduxjs/toolkit";
// import { selectCurrentToken } from "./authSlice";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


export const crearGrupo  = createAsyncThunk("grupos/create",
async(groupData,{rejectWithValue})=>{
    try {

        
        const config = {
            headers: {
              'Content-Type':'application/json',
            },
          }

          const {data} =await axios.post(
            "http://10.0.2.2:5000/api/grupos",
            {...groupData},config)

        return data

    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})


export const fetchGroup = createAsyncThunk("grupos/fetchh",async(grupo,{rejectWithValue})=>{

    try {
  
  
            const {data} = await axios.get(`http://10.0.2.2:5000/api/grupos/${grupo}`)            
            console.log(data)
                return data
            // setGrupoO(data)
    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
  })
  

export const quitGroup = createAsyncThunk("grupos/quit",async(groupData,{rejectWithValue})=>{
    try {
            const config = {
                headers:{
                    "Content-type":"application/json"
                }
            }

        const {data} = await axios.post("http://10.0.2.2:5000/api/grupos/leave",...groupData,config) 
        return data

    } catch (error) {
        throw new Error(error.message)
    }
})

export const joinGroup = createAsyncThunk("grupos/join",async(groupData,{rejectWithValue})=>{
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        const {data} = await axios.post("http://10.0.2.2:5000/api/grupos/join",...groupData,config)        
        return data

    } catch (error) {
        throw new Error(error.message)
    }
})



const initialState = {
    grupo:null,
    status:"loading",
    error:null,
    userGroup:null
}

const gruposSlice = createSlice({
    name:"grupos",
    initialState,
    reducers:{
        resetGrupo:(state,action)=>{
            state.grupo = null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(crearGrupo.pending,(state,action)=>{
            return {
                ...state,
                status:"loading"
            }
        })
        builder.addCase(crearGrupo.fulfilled,(state,action)=>{
            return {
                ...state,
                status:"success",
                grupo:action.payload    
            }
        })
        builder.addCase(crearGrupo.rejected,(state,action)=>{
            return {
                ...state,
                status:"rejected",
            }
        })
        builder.addCase(fetchGroup.fulfilled,(state,action)=>{
            return {
                ...state,
                userGroup:action.payload
            }
        })
        builder.addCase(fetchGroup.rejected,(state,action)=>{
            console.log("failed")
        })
        builder.addCase(quitGroup.pending,(state,action)=>{
            console.log("waiting quit")
        })
        builder.addCase(quitGroup.fulfilled,(state,action)=>{
            // state.userGroup = null
            return {
                ...state,
                userGroup:null 
            }

        })
        builder.addCase(quitGroup.rejected,(state,action)=>{
            console.log("failed quit")
        })
        builder.addCase(joinGroup.pending,(state,action)=>{
            console.log("wating joinin")
        })
        builder.addCase(joinGroup.fulfilled,(state,action)=>{
            // console.log("fullfillde")
            return{
                ...state,
                userGroup:action.payload
            }
        })

        builder.addCase(joinGroup.rejected,(state,action)=>{
            console.log("rejected joinin")
        })

    }
})
export const selectCurrentGrupo = (state)=> state.grupos.grupo
export const selectCurrentStatus = (state)=> state.grupos.status

export const {resetGrupo} = gruposSlice.actions 

export default gruposSlice.reducer
