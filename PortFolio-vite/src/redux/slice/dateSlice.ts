import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
  selectedDate: string | null; // 선택된 날짜
}

const initialState: DateState = {
  selectedDate: null, // 기본값은 null
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload; // 선택된 날짜를 업데이트
    },
  },
});

export const { setSelectedDate } = dateSlice.actions;
export default dateSlice.reducer;
