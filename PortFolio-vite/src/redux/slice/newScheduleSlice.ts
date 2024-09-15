import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Row 타입 정의
interface Row {
  id: number;
  name: string;
  content: string;
}
// 고유한 id와 내용을 가진 객체로 rows를 관리
export const newScheduleSlice = createSlice({
  name: "newSchedule",
  initialState: {
    schedulerows: [] as Row[],
    // schedulerows: Array.from({ length: 1 }, (_, i) => ({
    //   id: i + 1,
    //   name: `Row ${i + 1}`,
    // })), // id와 name을 가진 객체 배열
  },
  reducers: {
    removeScheduleRow: (state, action: PayloadAction<number>) => {
      state.schedulerows = state.schedulerows.filter(
        (row) => row.id !== action.payload
      ); // id를 기준으로 삭제
    },
    addScheduleRow: (
      state,
      action: PayloadAction<{ name: string; content: string }>
    ) => {
      const newId =
        state.schedulerows.length > 0
          ? state.schedulerows[state.schedulerows.length - 1].id + 1
          : 1;
      const newRow = {
        id: newId,
        name: action.payload.name,
        content: action.payload.content,
      };
      state.schedulerows.push(newRow); // 새로운 row 추가
    },
  },
});

export const { removeScheduleRow, addScheduleRow } = newScheduleSlice.actions;
export default newScheduleSlice.reducer;
