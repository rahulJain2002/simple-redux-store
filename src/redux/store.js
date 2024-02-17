import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice.js";

const configStore = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default configStore;