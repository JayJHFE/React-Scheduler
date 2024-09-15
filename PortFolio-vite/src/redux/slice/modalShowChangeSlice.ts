import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false, // 모달 열림 여부
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

// 액션 생성자와 리듀서를 익스포트
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
