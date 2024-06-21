import { createSlice } from "@reduxjs/toolkit";
import { crearFixture,fetchFixture } from "./fixtureActions";


const initialState = {
    fixture:[],
    error:null,
    fixtureStatus:"loading"
}


const fixtureSlice = createSlice({
    name:"fixtures",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchFixture.pending, (state,action)=>{
            return {
                ...state,
                fixtureStatus:"loading"
            }
        })
        builder.addCase(fetchFixture.fullfilled, (state,action)=>{
            return {
                ...state,
                fixtureStatus:"success",
                fixture:action.payload
            }
        })
        builder.addCase(fetchFixture.pending, (state,action)=>{
            return {
                ...state,
                fixtureStatus:"failed"
            }
        })
    }
})



export default fixtureSlice.reducer