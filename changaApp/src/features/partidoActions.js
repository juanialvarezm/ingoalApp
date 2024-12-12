import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { resetGrupo } from "./grupoSlice";

export const empezarPartido = createAsyncThunk("partidos/empezarPartido",async(partidoId)=>{
    try {
        
        const {data} = await axios.post("http://10.0.2.2:5000/api/partidos/empezar",{partidoId})
        return data
    } catch (error) {
        throw new Error(error.message)
    }
})

export const cargarUnPartido = createAsyncThunk("partidos/cargarunosolo",async(partidoId)=>{
    try {
        const {data} = await axios.post("http://10.0.2.2:5000/api/partidos/details",{partidoId})
        return data
    } catch (error) {
        throw new Error(error)
    }
})

export const actualizarPuntos = createAsyncThunk("partidos/actualizarpuntos",async(puntosData,{rejectWithValue})=>{
    try {

            
        const {data} = await axios.post("http://10.0.2.2:5000/api/partidos/puntos",{...puntosData})
        console.log(data)
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


export const agregarPartidoAlFixture=createAsyncThunk("partidos/agregar",async({rejectWithValue})=>{
    try {
        const {data} = await axios.post("http://10.0.2.2/api/partidos",{})
        return data
    } catch (error) {
        rejectWithValue(error.response?.data)
    }
})