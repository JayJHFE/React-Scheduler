import { createSlice } from "@reduxjs/toolkit";

// 메인 페이지 렌더링을 위한 createSlice 생성
export const componentChangeReducer = createSlice({
  name: "changeComponent",
  initialState: {
    //초기값 false
    value: "main",
  },
  reducers: {
    // reducer로 notmain, main을 생성
    showHome: (state) => {
      state.value = "home"; // 상태를 'home' 문자열로 업데이트
    },
    showMain: (state) => {
      state.value = "main"; // 상태를 'main' 문자열로 업데이트
    },
    showScheduler: (state) => {
      state.value = "scheduler"; // 상태를 'scheduler' 문자열로 업데이트
    },
  },
});

// componentChangeSlice의 actions를 export
export const { showHome, showMain, showScheduler } =
  componentChangeReducer.actions;

export default componentChangeReducer.reducer;
