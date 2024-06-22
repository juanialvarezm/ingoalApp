import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
import { selectCurrentToken } from "./authSlice";

export const fetchFixture = createAsyncThunk("grupos/fetchfixture",async(fixtureData,{rejectWithValue})=>{
    try {

        const {data} = await axios.post("http://10.0.2.2:5000/api/fixture",{...fixtureData})
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

export const crearFixture = createAsyncThunk("grupos/crearFixture",async(fixtureData,{rejectWithValue})=>{
    try {
        
        const {data} = await axios.post("http://10.0.2.2:5000/api/fixture",...fixtureData)
        console.log(data)
        return data

    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})