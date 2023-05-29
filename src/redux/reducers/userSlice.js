import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const counterSlice = createSlice({
  name: "userAth",
  initialState: {
    isLoggin: false,
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, (state, action)=>{
        state.isLoggin = false;
        state.data = [];
        state.loading = true;
        state.error = null
    })
    .addCase(register.fulfilled, (state, action)=>{
        state.isLoggin = true;
        state.data = action.payload;
        state.loading = false;
        state.error = null
    })
    .addCase(register.rejected, (state, action)=>{
        state.isLoggin = false;
        state.data = [];
        state.loading = false;
        state.error = action.payload
    })
  },
});



export const register = createAsyncThunk("registeruser", async (formData)=>{
    try {
        const response = await axios.post(`http://localhost:5000/user/register`, formData);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
})



export default counterSlice.reducer;
