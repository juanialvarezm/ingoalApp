import { createSlice } from "@reduxjs/toolkit";
import { fetchGroup, login,register } from "./authActions";
import { useSelector } from "react-redux";

const initialState = {
    error:null,
    userToken:null,
    status:"loading",
    userInfo:null,
    userGroup:null,
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state,action)=>{
            return {
                ...state,
                userToken:null,
                userInfo:null,    
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(register.pending,(state,action)=>{
            return {
                ...state,
                status:"loading",
                userInfo:null,
                userToken:null
            }
            console.log("loading")
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            return {
                ...state,
                status:"success",
                userInfo:action.payload,
                userToken:action.payload.token
            }
            return console.log("success")
        })
        builder.addCase(register.rejected,(state,action)=>{
            return {
                ...state,
                status:"error",
                userToken:null,
                userInfo:null
            }
            return console.log("rejected")
        })
        builder.addCase(login.pending, (state,action)=>{
            console.log("loading")
            return {
                ...state,
                status:"loading",
                userInfo:null,
                userToken:null
            }
        })
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log("loggedin")
            return {
                ...state,
                status:"success",
                userInfo:action.payload,
                userToken:action.payload.token
            }

        })
        builder.addCase(login.rejected,(state,action)=>{
            return console.log("rejected")

            return {
                ...state,
                status:"error",
                userInfo:null,
                userToken:null
            }

        })
        builder.addCase(fetchGroup.fulfilled,(state,action)=>{
            return {
                ...state,
                userGroup:action.payload
            }
            console.log("fulll")
        })
        builder.addCase(fetchGroup.rejected,(state,action)=>{
            console.log("failed")
        })
    }
})

export const selectUserInfo = (state)=>state.auth.userInfo


export const selectCurrentUser = (state)=>state.auth.userInfo
export const selectCurrentToken = (state)=>state.auth.userToken

export const {logout} = authSlice.actions

export default authSlice.reducer
