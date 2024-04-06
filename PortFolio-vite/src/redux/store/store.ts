import { configureStore } from "@reduxjs/toolkit";
import componentChangeReducer from "../slice/componentChangeSlice";

export const store = configureStore({
  reducer: {
    componentChange: componentChangeReducer,
  },
});
