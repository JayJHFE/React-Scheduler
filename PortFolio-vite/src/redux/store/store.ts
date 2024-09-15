import { configureStore } from "@reduxjs/toolkit";
import componentChangeReducer from "../slice/componentChangeSlice";
import tableLengthChangeReducer from "../slice/tableLengthChangeSlice";
import newScheduleReducer from "../slice/newScheduleSlice";
import modalReducer from "../slice/modalShowChangeSlice";

export const store = configureStore({
  reducer: {
    componentChange: componentChangeReducer,
    tableLengthChange: tableLengthChangeReducer,
    newSchedule: newScheduleReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
