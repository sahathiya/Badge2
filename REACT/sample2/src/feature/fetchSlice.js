import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


 export const Fetchdata=createAsyncThunk('users',async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log("rrrrrrrrrrrrrrrrrrrrrrrr",response);
    
    return response.data
})


const fetchSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        status:'idle'
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(Fetchdata.pending, (state)=>{
            state.status='pending'
        })
        .addCase(Fetchdata.fulfilled,(state,action)=>{
            state.status='success'
            state.users=action.payload
        })
        .addCase(Fetchdata.rejected,(state)=>{
            state.status='failed'
        })
    }
})


export default fetchSlice.reducer