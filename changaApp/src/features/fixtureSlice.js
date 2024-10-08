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
        }),
        builder.addCase(crearFixture.pending,()=>{
            return console.log("loading creating")
        })
        builder.addCase(crearFixture.fulfilled,(state,action)=>{
            // return console.log(" created success")
            return {
                fixtureData:action.payload
            }
        })
        builder.addCase(crearFixture.rejected,()=>{
            return console.log("error creating")
        })
    }
})



export default fixtureSlice.reducer