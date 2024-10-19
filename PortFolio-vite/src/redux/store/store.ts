import { configureStore } from "@reduxjs/toolkit";
import componentChangeReducer from "../slice/componentChangeSlice";
import tableLengthChangeReducer from "../slice/tableLengthChangeSlice";
import newScheduleReducer from "../slice/newScheduleSlice";
import modalReducer from "../slice/modalShowChangeSlice";
import scheduleReducer from "../slice/scheduleSlice";

export const store = configureStore({
  reducer: {
    componentChange: componentChangeReducer,
    tableLengthChange: tableLengthChangeReducer,
    newSchedule: newScheduleReducer,
    modal: modalReducer,
    schedule: scheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
