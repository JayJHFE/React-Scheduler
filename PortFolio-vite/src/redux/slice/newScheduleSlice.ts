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
    addScheduleRow: (
      state,
      action: PayloadAction<{ name: string; hour: number; minute: number }>
    ) => {
      const newId =
        state.schedulerows.length > 0
          ? state.schedulerows[state.schedulerows.length - 1].id + 1
          : 1;
      const newRow: Row = {
        id: newId,
        name: action.payload.name,
        hour: action.payload.hour, // 시간 필드의 기본값 0
        minute: action.payload.minute, // 분 필드의 기본값 0
      };
      state.schedulerows.push(newRow); // 새로운 row 추가
    },
  },
});

export const { removeScheduleRow, addScheduleRow } = newScheduleSlice.actions;
export default newScheduleSlice.reducer;
