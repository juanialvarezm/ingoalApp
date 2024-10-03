import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
import { selectCurrentToken } from "./authSlice";

export const fetchFixture = createAsyncThunk("fixtures/fetchfixture",async(lotofda,{rejectWithValue})=>{
    try {

        // const {data} = await axios.post("http://10.0.2.2:5000/api/fixture",...lotofda)
        const {data} = await axios.post("http://10.0.2.2:5000/api/fixture",{...lotofda})
            console.log("fetched fixture")
        return data
        
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

export const crearFixture = createAsyncThunk("fixtures/crearFixture",async(fixtureData,{rejectWithValue})=>{
    try {
        
        const {data} = await axios.post("http://10.0.2.2:5000/api/fixture/crear",{...fixtureData})
        // console.log(data)
        return data

    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

