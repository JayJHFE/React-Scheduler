import { configureStore } from "@reduxjs/toolkit";
import componentChangeReducer from "../slice/componentChangeSlice";
import tableLengthChangeReducer from "../slice/tableLengthChangeReducer";

export const store = configureStore({
  reducer: {
    componentChange: componentChangeReducer,
    tableLengthChange: tableLengthChangeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
