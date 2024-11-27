// import { createSlice } from "@reduxjs/toolkit";

// const inputSlice=createSlice({
//     name:'todo',
//     initialState:{
//         inputvalue:"",
//         items:[],
//         editingId: null,
//     },
//     reducers:{

//         inputvalue:(state,action)=>{
//             state.inputvalue=action.payload
//         },
//         submitvalue:(state,action)=>{


//             if(state.editingId==null){
//                 state.items.push({id: Date.now(), text: state.inputvalue})
//             }else{
//                       state.items[state.editIndex]=state.inputvalue
//                       state.editingId=null
//                    }
//                     state.inputString=""
                   
//                 },
//         //     // if(state.inputvalue){
//         //     //     state.items.push({
//         //     //          id: Date.now(), 
                   
//         //     //         text: state.inputvalue})
//         //     //     // state.items.push(state.inputvalue)
//         //     // }
//         //     // state.inputvalue=""
            
//         // },



        
//         removeitem:(state,action)=>{
//   state.items=state.items.filter((todo)=>todo.id !==action.payload)
//         },
//         edititem:(state,action)=>{
//             // state.inputvalue=state.items[action.payload]
            

//              const itemToEditem=state.items.find((item)=>item.id===action.payload)
//              if(itemToEditem){
//                 state.inputvalue=itemToEditem.text
//                 state.editingId=null
//              }
//             console.log('gghg',state.items);
            
//              console.log("action.payload",state.inputvalue);

            
//         }

//     }

// })


// export const{inputvalue,submitvalue,removeitem,edititem}=inputSlice.actions
// export default inputSlice.reducer





import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "todo",
  initialState: {
    inputvalue: "", // Input value
    items: [], // List of todo items
    editingId: null, // ID of the item currently being edited
  },
  reducers: {
    // Action to update input value
    inputvalue: (state, action) => {
      state.inputvalue = action.payload;
    },

    // Action to submit the value (either add or edit item)
    submitvalue: (state) => {
      if (state.editingId === null) {
        // If no item is being edited, add a new item
        state.items.push({
          id: Date.now(), // Use timestamp for unique ID
          text: state.inputvalue,
        });
      } else {
        // If editing an existing item, update its text
        const itemToEdit = state.items.find((item) => item.id === state.editingId);
        if (itemToEdit) {
          itemToEdit.text = state.inputvalue; // Update the text
        }
        state.editingId = null; // Reset editingId after editing
      }
      state.inputvalue = ""; // Clear the input field after submission
    },

    // Action to remove an item
    removeitem: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },

    // Action to set the input field for editing an item
    edititem: (state, action) => {
      const itemToEdit = state.items.find((item) => item.id === action.payload);
      if (itemToEdit) {
        state.inputvalue = itemToEdit.text; // Set input value to the item's current text
        state.editingId = itemToEdit.id; // Set the editingId to the item being edited
      }
    },
  },
});

export const { inputvalue, submitvalue, removeitem, edititem } = inputSlice.actions;
export default inputSlice.reducer;
