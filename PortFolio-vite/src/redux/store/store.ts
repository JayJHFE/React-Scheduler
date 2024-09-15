import { configureStore } from "@reduxjs/toolkit";
import componentChangeReducer from "../slice/componentChangeSlice";
import tableLengthChangeReducer from "../slice/tableLengthChangeSlice";
import newScheduleReducer from "../slice/newScheduleSlice";

export const store = configureStore({
  reducer: {
    componentChange: componentChangeReducer,
    tableLengthChange: tableLengthChangeReducer,
    newSchedule: newScheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
