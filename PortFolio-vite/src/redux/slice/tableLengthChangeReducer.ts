import { createSlice } from "@reduxjs/toolkit";

// 메인 페이지 렌더링을 위한 createSlice 생성
export const tableLengthChangeReducer = createSlice({
  name: "tableLengthChange",
  initialState: {
    //초기값 0
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1; // 상태를 1 증가
    },
    decrease: (state) => {
      state.value -= 1; // 상태를 1 감소
    },
  },
});

// componentChangeSlice의 actions를 export
export const { increase, decrease } = tableLengthChangeReducer.actions;

export default tableLengthChangeReducer.reducer;
