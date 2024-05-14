import axiosClient from "../index"
import { Success } from "../../utils"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setCookie } from "../../utils"

export const getAuth = createAsyncThunk('getAuth', async (payload) => {
    const response = await axiosClient.post('/admin/auth/login',payload)
    try {
        setCookie('userDetails', response.data.message)
        return response.data
    } catch (error) {
        Error(response.data.message)
    }
})

export const forgetAuth = createAsyncThunk('forgetAuth', async (payload) => {
    const response = await axiosClient.post('/admin/auth/forgotpassword',payload)
    try {
        Success(response.data.message)
    } catch (error) {
        Error(response.data.message)
    }
})