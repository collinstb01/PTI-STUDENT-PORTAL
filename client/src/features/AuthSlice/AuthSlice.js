import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";
import axios from "axios";

export const get_receipts_slice = createAsyncThunk("get/receipts", async () => {
  try {
    const response = await api.get_receipts();

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const AuthSlice = createSlice({
  name: "search",
  initialState: {
    IP_ADDRESS: [],
    user: [],
    deviceChanged: [],
    codeResendMessage: [],
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [get_receipts_slice.pending]: (state, action) => {
      return { ...state };
    },
    [get_receipts_slice.fulfilled]: (state, action) => {
      return { ...state, loading: false, IP_ADDRESS: action.payload };
    },
    [get_receipts_slice.rejected]: (state, action) => {
      return { ...state };
    },
  },
});

export default AuthSlice.reducer;
