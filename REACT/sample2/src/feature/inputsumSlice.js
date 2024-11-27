import { createSlice } from "@reduxjs/toolkit";

const inputsumSlice=createSlice({
    name:'inputsum',
    initialState:{value1:0,value2:0,sum:0},
    reducers:{
        firstnum:(state,action)=>{
            state.value1+=action.payload
        },
        secondnum:(state,action)=>{
            state.value2+=action.payload
        }
    }
})

export const{firstnum,secondnum}=inputsumSlice.actions
export default inputsumSlice.reducer