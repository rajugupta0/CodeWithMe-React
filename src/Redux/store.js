import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import authSliceReducer from "./Slices/AuthSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer
    },
    devTools: true
});

export default store;