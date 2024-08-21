import {createSlice} from "@reduxjs/toolkit"
import { actualizarPartido, actualizarPuntos, crearPartido, empezarPartido } from "./partidoActions";

const initialState = {
    partido:null,
    status:"loading",
    error:null
}

const partidoSlice = createSlice({
    name:"partidos",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(empezarPartido.pending,(state,action)=>{
            return {...state,
                status:"loading"
            }
        })
        builder.addCase(empezarPartido.fulfilled,(state,action)=>{
            return {...state,
                status:"success",
                partido:action.payload
            }
        })
        builder.addCase(actualizarPuntos.fulfilled,(state,action)=>{
            return {...state,
                status:"success",
                partido:action.payload
            }
        })
        builder.addCase(actualizarPuntos.pending,(state,action)=>{
            return {...state,
                status:"loading",
            }
        })
        builder.addCase(actualizarPartido.fulfilled,(state,action)=>{
            return {...state,
                status:"success",
                partido:action.payload
            }
        })
        builder.addCase(actualizarPartido.pending,(state,action)=>{
            return {...state,
                status:"loading",
            }
        })
        builder.addCase(crearPartido.pending,(state,action)=>{
            return {...state,
                status:"loading",
            }
        })
        builder.addCase(crearPartido.fulfilled,(state,action)=>{
            return {...state,
                status:"success",
                partido:action.payload
            }
        })
    }
})

export default partidoSlice.reducer