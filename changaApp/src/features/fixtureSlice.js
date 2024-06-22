import { createSlice } from "@reduxjs/toolkit";
import { crearFixture,fetchFixture } from "./fixtureActions";


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
    }
})



export default fixtureSlice.reducer