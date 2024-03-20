import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers:{
        doLogin: (state: any, action: any) =>{
            state.user = action.payload
        }
    }
});

export const authReducer = authSlice.reducer;

export const{
    doLogin,
} = authSlice.actions