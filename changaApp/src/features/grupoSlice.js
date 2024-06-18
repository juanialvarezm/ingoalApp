import { createSlice } from "@reduxjs/toolkit";
import { selectCurrentToken } from "./authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { crearGrupo,fetchPartidos,
    addPartidoAlFixture,quitGroup,joinGroup,fetchGroup } from "./grupoActions";

    
const initialState = {
    grupo:null,
    status:"loading",
    error:null,
    fixtureDelGrupo:"hola",
    userGroup:null,
    
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
            return{
                ...state,
                userGroup:action.payload
            }
        })
        builder.addCase(joinGroup.rejected,(state,action)=>{
            console.log("rejected joinin")
        })
        builder.addCase(addPartidoAlFixture.pending,(state,action)=>{
            console.log("esperando agregar partido al fixture")
        })
        builder.addCase(addPartidoAlFixture.fulfilled,(state,action)=>{
            return {
                ...state,
                userGroup:action.payload
            }
            return console.log("fullfilled added to fixture")

        })
        builder.addCase(addPartidoAlFixture.rejected,(state,action)=>{
            console.log("partido no agregado")
        })
        builder.addCase(fetchPartidos.rejected,(state,action)=>{
            console.log("no fetch partidos")
        })
        builder.addCase(fetchPartidos.fulfilled,(state,action)=>{
            console.log("fixtureGroup fetched")
        })
        builder.addCase(fetchPartidos.pending,(state,action)=>{
            console.log("partidos pending")
        })
        // builder.addCase(fetchFixture.fulfilled,(state,action)=>{
        //     return console.log(state.fixtureGroup)
            // return {
            //     ...state,
            //     fixtureGroup:action.payload
            // }
        // })
        // builder.addCase(fetchFixture.rejected,(state,action)=>{
        //     console.log("rejected loading fixture")
        // })
        // builder.addCase(crearFixture.rejected,(state,action)=>{
        //     console.log("rejected crear fixture")
        // })
        // builder.addCase(crearFixture.fulfilled,(state,action)=>{
        //     return {
        //         ...state,
        //         fixtureGroup:action.payload
        //     }
        // })

    }
})
export const selectCurrentGrupo = (state)=> state.grupos.grupo
export const selectCurrentStatus = (state)=> state.grupos.status

export const {resetGrupo} = gruposSlice.actions 

export default gruposSlice.reducer
