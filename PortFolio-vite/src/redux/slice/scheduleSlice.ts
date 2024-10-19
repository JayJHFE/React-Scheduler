import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Schedule {
  id: number;
  item: DraggedItem;
  timeIndex: number;
  rowIndex: number;
}

interface ScheduleState {
  schedules: {
    [date: string]: Schedule[]; // 각 날짜에 대해 스케줄 배열을 저장
  };
  selectedDate: string | null;
}

const initialState: ScheduleState = {
  schedules: {},
  selectedDate: null,
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    addSchedule: (
      state,
      action: PayloadAction<{ date: string; schedule: Schedule }>
    ) => {
      const { date, schedule } = action.payload;
      if (!state.schedules[date]) {
        state.schedules[date] = []; // 해당 날짜에 스케줄 배열이 없으면 빈 배열 생성
      }
      state.schedules[date].push(schedule); // 스케줄 추가
    },
    removeSchedule: (
      state,
      action: PayloadAction<{ date: string; scheduleId: number }>
    ) => {
      const { date, scheduleId } = action.payload;
      if (state.schedules[date]) {
        state.schedules[date] = state.schedules[date].filter(
          (schedule) => schedule.id !== scheduleId
        );
      }
    },
  },
});

export const { setSelectedDate, addSchedule, removeSchedule } =
  scheduleSlice.actions;

export default scheduleSlice.reducer;
