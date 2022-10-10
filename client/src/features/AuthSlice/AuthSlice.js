import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api.js";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const getIp = createAsyncThunk("search/results", async () => {
  try {
    const response = await api.getIP();

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const loginUser = createAsyncThunk(
  "login/user",
  async ({ email, password, IP, navigate, setError }) => {
    try {
      // const responseForUserApi =await axios.get('https://geolocation-db.com/json/')
      // console.log(responseForUserApi.data)
      // setIP(responseForUserApi.data.IPv4)
      const user = navigator.userAgent;
    //   const data = await axios.get(
    //     `http://api.userstack.com/detect?access_key=28f5d155614a486133472e8bf5197c1a&ua=${user}`
    //   );
    console.log(user)
      const response = await api.login({ email, password, IP });

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
        navigate("/");
      }
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.status);

      if (error) {
        setError("Wrong Credentials");
      }
      if (error.response.status === 410) {
        navigate(`/chnagedevice`);
        localStorage.setItem("email", email);
      }
      console.log(error);
    }
  }
);
export const changeDevice = createAsyncThunk(
  "changIp/user",
  async ({ email, code, navigate, IP, setMessage }) => {
    try {
      const user = navigator.userAgent;
      console.log(user);
      const responseForUserApi = await axios.get(
        "https://geolocation-db.com/json/"
      );
      console.log(responseForUserApi.data);
        console.log(IP)

    const response = await api.changedevice(
        { email, code, IP },
      );
      setMessage(response.data.message);

      console.log(response.data);
      if (response.data) {
        // navigate("/");
      }
      return response.data;
    } catch (error) {
      console.log(error.status);
      setMessage(error.response.data.message);
      console.log(error);
    }
  }
);
export const resendCode = createAsyncThunk(
  "resendcode/user",
  async ({ email, setMessage }) => {
    try {
      const response = await api.resendcode(email);

      setMessage(response.data.message);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const AuthSlice = createSlice({
  name: "search",
  initialState: {
    IP_ADDRESS: [],
    user: [],
    deviceChanged: [],
    codeResendMessage: [],
    loading: true,
  },
  reducers: {

  },
  extraReducers: {
    [getIp.pending]: (state, action) => {
      return { ...state };
    },
    [getIp.fulfilled]: (state, action) => {
      return { ...state, loading: false, IP_ADDRESS: action.payload };
    },
    [getIp.rejected]: (state, action) => {
      return { ...state };
    },
    [loginUser.pending]: (state, action) => {
      return { ...state };
    },
    [loginUser.fulfilled]: (state, action) => {
      return { ...state, loading: false, user: action.payload };
    },
    [loginUser.rejected]: (state, action) => {
      return { ...state };
    },
    [changeDevice.pending]: (state, action) => {
      return { ...state };
    },
    [changeDevice.fulfilled]: (state, action) => {
      return { ...state, loading: false, deviceChanged: action.payload };
    },
    [changeDevice.rejected]: (state, action) => {
      return { ...state };
    },
    [resendCode.pending]: (state, action) => {
      return { ...state };
    },
    [resendCode.fulfilled]: (state, action) => {
      return { ...state, loading: false, codeResendMessage: action.payload };
    },
    [resendCode.rejected]: (state, action) => {
      return { ...state };
    },
  },
});

export default AuthSlice.reducer;
