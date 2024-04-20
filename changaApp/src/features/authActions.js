import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
import { selectCurrentToken } from "./authSlice";

export const register = createAsyncThunk("auth/register",
        async(userData,{rejectWithValue})=>{
            try {
                const config = {
                    headers: {
                      'Content-Type':'application/json',
                    },
                  }

                 const {data} =await axios.post(
                    `http://10.0.2.2:5000/api/user/`,
                    {...userData},
                    config
                    )
                    console.log(data)
                    return data
                } catch (error) {
                  console.log(error.message)
                  return rejectWithValue(error.response?.data)
                }
        }
    )


export const login = createAsyncThunk("auth/login",async (userData,{rejectWithValue})=>{
    try {

        const config = {
            headers: {
              'Content-Type':'application/json',
            },
          }

        const {data} = await axios.post("http://10.0.2.2:5000/api/user/login",{...userData},config)
        // console.log(data)
        const user = await AsyncStorage.setItem("userData",JSON.stringify(data))
        
        // console.log(user)
        // console.log(data)
        return data
    } catch (error) {
        return rejectWithValue(error.response.data)        
    }
})


