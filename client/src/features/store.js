import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
