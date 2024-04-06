import { createSlice } from "@reduxjs/toolkit";

// 메인 페이지 렌더링을 위한 createSlice 생성
export const componentChangeReducer = createSlice({
  name: "changeComponent",
  initialState: {
    //초기값 false
    value: false,
  },
  reducers: {
    // reducer로 notmain, main을 생성
    notMain: (state) => {
      state.value = true;
    },
    main: (state) => {
      state.value = false;
    },
  },
});

// componentChangeSlice의 actions를 export
export const { notMain, main } = componentChangeReducer.actions;

export default componentChangeReducer.reducer;
