import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../feature/counterSlice';
import fetchSlice from '../feature/fetchSlice';
import inputSlice from "../feature/inputSlice"
import  sumSlice  from "../feature/sumSlice";
import inputsumSlice from '../feature/inputsumSlice'
const store=configureStore({
    reducer:{
        counter:counterSlice,
        users:fetchSlice,
        todo:inputSlice,
        sum:sumSlice,
        inputsum:inputsumSlice
    }
})

export default store