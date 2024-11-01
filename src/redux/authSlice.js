// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await axios.post("https://api.example.com/registration", userData);
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (userData) => {
  const response = await axios.post("https://api.example.com/login", userData);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userInfo: null,
    authToken: null,
    status: null,
  },
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.authToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(register.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.userInfo = action.payload.user;
        state.authToken = action.payload.token;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
