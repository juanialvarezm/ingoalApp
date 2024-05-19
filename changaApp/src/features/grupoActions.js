import { createSlice } from "@reduxjs/toolkit";
import { selectCurrentToken } from "./authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const crearGrupo  = createAsyncThunk("grupos/create",
    async(groupData,{rejectWithValue})=>{
    try {
        const config = {
            headers: {
              'Content-Type':'application/json',
            },
          }

          const {data} =await axios.post(
            "http://10.0.2.2:5000/api/grupos",
            {...groupData},config)

        return data

    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})


const agregarPartidoAlFixture = createAsyncThunk("grupos/addPartido",()=>{
    try {

    } catch (error) {
        throw new Error(error.message)
    }
})