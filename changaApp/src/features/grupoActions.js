import { createSlice } from "@reduxjs/toolkit";
import { selectCurrentToken } from "./authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";


export const crearGrupo  = createAsyncThunk("grupos/create",
async(groupData,{rejectWithValue})=>{
    try {

    const { userToken } = useSelector((state)=>state.auth)
        
        const config = {
            headers: {
              'Content-Type':'application/json',
              "Authorization":`Bearer ${userToken}`
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


