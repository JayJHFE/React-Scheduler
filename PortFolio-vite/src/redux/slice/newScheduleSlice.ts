import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Row 타입 정의 (시간, 분 필드 추가)
interface Row {
  id: number;
  name: string;
  hour: number; // 시간 필드 추가
  minute: number; // 분 필드 추가
}

// 고유한 id와 내용을 가진 객체로 rows를 관리
export const newScheduleSlice = createSlice({
  name: "newSchedule",
  initialState: {
    schedulerows: [] as Row[],
  },
  reducers: {
    removeScheduleRow: (state, action: PayloadAction<number>) => {
      state.schedulerows = state.schedulerows.filter(
        (row) => row.id !== action.payload
      ); // id를 기준으로 삭제
    },
    addScheduleRow: (state, action: PayloadAction<{ name: string }>) => {
      const newId =
        state.schedulerows.length > 0
          ? state.schedulerows[state.schedulerows.length - 1].id + 1
          : 1;
      const newRow: Row = {
        id: newId,
        name: action.payload.name,
        hour: 0, // 시간 필드의 기본값 0
        minute: 0, // 분 필드의 기본값 0
      };
      state.schedulerows.push(newRow); // 새로운 row 추가
    },
    // 시간을 업데이트하는 리듀서
    updateScheduleHour: (
      state,
      action: PayloadAction<{ id: number; hour: number }>
    ) => {
      const rowToUpdate = state.schedulerows.find(
        (row) => row.id === action.payload.id
      );
      if (rowToUpdate) {
        rowToUpdate.hour = action.payload.hour; // 시간 업데이트
      }
    },
    // 분을 업데이트하는 리듀서
    updateScheduleMinute: (
      state,
      action: PayloadAction<{ id: number; minute: number }>
    ) => {
      const rowToUpdate = state.schedulerows.find(
        (row) => row.id === action.payload.id
      );
      if (rowToUpdate) {
        rowToUpdate.minute = action.payload.minute; // 분 업데이트
      }
    },
  },
});

export const {
  removeScheduleRow,
  addScheduleRow,
  updateScheduleHour,
  updateScheduleMinute,
} = newScheduleSlice.actions;
export default newScheduleSlice.reducer;
