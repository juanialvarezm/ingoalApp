import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const empezarPartido = createAsyncThunk("partidos/empezarPartido",async()=>{
    try {
        
        const {data} = await axios.post("http://10.0.2.2:5000/api/partidos/empezar")
        return data
    } catch (error) {
        throw new Error(error.message)
    }
})

export const actualizarPuntos = createAsyncThunk("partidos/actualizarpuntos",async(puntosData,{rejectWithValue})=>{
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const {data} = await axios.post("http://10.0.2.2:5000/api/puntos/",{...puntosData})
        return data
    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
}) 


export const actualizarPartido = createAsyncThunk("partidos/actualizarPartido",async(puntosData,{rejectWithValue})=>{
    try {
        const {data} = await axios.post("http://10.0.2.2:5000/api/partidos/actualizar",{...puntosData})
        return data
    } catch (error) {
        throw new Error(error.message)   
    }
}) 


export const crearPartido = createAsyncThunk("partidos/crear",async({crearData})=>{
    try {
        const {data} = await axios.post("http://10.0.2.2/api/partidos/",{...crearData})
        return data
    } catch (error) {
        throw new Error(error.message)
    }
})