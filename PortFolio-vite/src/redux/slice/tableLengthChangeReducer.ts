import { createSlice } from "@reduxjs/toolkit";

// 고유한 id와 내용을 가진 객체로 rows를 관리
export const tableLengthChangeSlice = createSlice({
  name: "tableLengthChange",
  initialState: {
    rows: Array.from({ length: 1 }, (_, i) => ({ id: i + 1, name: `Row ${i + 1}` })), // id와 name을 가진 객체 배열
  },
  reducers: {
    removeRow: (state, action) => {
      state.rows = state.rows.filter((row) => row.id !== action.payload); // id를 기준으로 삭제
    },
    addRow: (state) => {
      const newId = state.rows.length > 0 ? state.rows[state.rows.length - 1].id + 1 : 1;
      const newRow = { id: newId, name: `Row ${newId}` };
      state.rows.push(newRow); // 새로운 row 추가
    }
  },
});

export const { removeRow, addRow } = tableLengthChangeSlice.actions;
export default tableLengthChangeSlice.reducer;