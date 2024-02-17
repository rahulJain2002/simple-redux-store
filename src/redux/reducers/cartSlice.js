import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart-slice",
    initialState: [],
    reducers: {
        add: (state,action)=>{
            state.push(action.payload);
        },
        remove: (state,action)=>{
            const newState = state.filter((element,index)=>{
                return index != action.payload;
            })
            return newState;
        }
    }
})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;