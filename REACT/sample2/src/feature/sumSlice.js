// import { createSlice } from "@reduxjs/toolkit";

//   const sumSlice=createSlice({
//     name:'sum',
//     initialState:{
//         one:0,
//         two:0,
//         three:0,
//         total:0
//     },
//     reducers:{
//   increment1:(state)=>{
//     state.one+=1
   
//   },
//   increment2:(state)=>{
//     state.two=state.one+1
   

//   },
//   increment3:(state)=>{
//     state.three=state.one+state.two+1
//     state.total=state.one+state.two.state.three
//   }
//     }

// })


// export const{increment1,increment2,increment3}=sumSlice.actions
// export default sumSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

const sumSlice = createSlice({
  name: "sum",
  initialState: {
    one: 1,
    two: 0,
    three: 0,
    total: 0,
  },
  reducers: {
    increment1: (state) => {
        state.two = state.one + 1;
    },
    increment2: (state) => {
     state.three =  state.two + 1;
    },
    increment3: (state) => {
     
      state.total = state.one + state.two + state.three; // Correct calculation
    },
  },
});

export const { increment1, increment2, increment3 } = sumSlice.actions;
export default sumSlice.reducer;
