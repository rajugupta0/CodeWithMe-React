import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedin: localStorage.getItem('isLoggedin') || false,
    rele: localStorage.getItem('role') || " ",
    data: localStorage.getItem('data') || {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    
})

export default authSlice.reducer;