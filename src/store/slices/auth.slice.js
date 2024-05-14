import { createSlice } from "@reduxjs/toolkit";
import { forgetAuth, getAuth } from "../../api/actions/auth.action";

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        date: {},
        loading: false,
        error: null
    },
    extraReducers: (builder) => {

        builder.addCase(getAuth.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(getAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        ,
        builder.addCase(forgetAuth.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(forgetAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(forgetAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
})

export default authReducer.reducer