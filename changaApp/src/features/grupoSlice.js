import { createSlice } from "@reduxjs/toolkit";
import { selectCurrentToken } from "./authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {crearGrupo} from "./grupoActions"


const initialState = {
    grupo:null,
    status:"loading",
    error:null
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
    }
})
export const selectCurrentGrupo = (state)=> state.grupos.grupo
export const selectCurrentStatus = (state)=> state.grupos.status

export const {resetGrupo} = gruposSlice.actions 

export default gruposSlice.reducer
