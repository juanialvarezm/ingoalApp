import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

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
    
    
    export const fetchGroup = createAsyncThunk("grupos/fetch",async(groupData,{rejectWithValue})=>{
        try {  
      
                const {data} = await axios.get(`http://10.0.2.2:5000/api/user/grupo/${groupData}`)            
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
    
    
       export const addPartidoAlFixture = createAsyncThunk("grupos/addFixture",async(groupData,{rejectWithValue})=>{
            try {
    
                const {data} = await axios.post("http://10.0.2.2:5000/api/grupos/fixture",{...groupData})
                console.log(groupData)
                return data 
            } catch (error) {
                return rejectWithValue(error.response?.data)
            }
        })
    
        export const fetchPartidos = createAsyncThunk("grupos/fetchpartidos",async(fixtureData,{rejectWithValue})=>{
            try {
                const {data} = await axios.get("http://10.0.2.2:5000/api/partidos",{...fixtureData})
                return data
                
            } catch (error) {
                return rejectWithValue(error.response?.data)
                
            }
        })
    
       export const fetchFixture = createAsyncThunk("grupos/fetchfixture",async(fixtureData,{rejectWithValue})=>{
            try {
    
                const {data} = await axios.get("http://10.0.2.2:5000/api/fixture",{...fixtureData})
                
                return data
                
            } catch (error) {
                return rejectWithValue(error.response?.data)
            }
        })