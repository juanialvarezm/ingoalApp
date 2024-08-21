import { createSlice } from "@reduxjs/toolkit";
import { crearFixture,empezarPartido,fetchFixture } from "./fixtureActions";


const initialState = {
    fixtureData:null,
    error:null,
    fixtureStatus:"loading"
}


const fixtureSlice = createSlice({
    name:"fixtures",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchFixture.fulfilled,(state,action)=>{
            return{
                ...state,
                fixtureStatus:"success",
                fixtureData:action.payload
            }
        })
        builder.addCase(fetchFixture.rejected,(state,action)=>{
            return{
                ...state,
                fixtureStatus:"failed",
            }
        })
        builder.addCase(fetchFixture.pending,(state,action)=>{
            return{
                ...state,
                fixtureStatus:"loading",
            }
        })
    }
})



export default fixtureSlice.reducer