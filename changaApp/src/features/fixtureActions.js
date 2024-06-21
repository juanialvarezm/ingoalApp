export const fetchFixture = createAsyncThunk("grupos/fetchfixture",async(fixtureData,{rejectWithValue})=>{
    try {

        const {data} = await axios.get("http://10.0.2.2:5000/api/fixture",{...fixtureData})
        
        return data
        
    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})

export const crearFixture = createAsyncThunk("grupos/crearFixture",async(fixtureData,{rejectWithValue})=>{
    try {
        
        const {data} = await axios.post("http://10.0.2.2:5000/api/fixture",{...fixtureData})
        console.log(data)
        return data

    } catch (error) {
        return rejectWithValue(error.response?.data)
    }
})