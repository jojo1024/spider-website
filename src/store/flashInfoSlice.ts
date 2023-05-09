import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFalshInfoState {
  allFlashInfo: IInfo[];
}

export interface IInfo {
  idInfo: number,
  titreInfo: string,
  active: number,
}
const initialState: IFalshInfoState = {
  allFlashInfo: [],
}

export const flashInfoSlice = createSlice({
  name: "flashInfo",
  initialState: initialState,
  reducers: {
    setAllFlashInfo: (state, action: PayloadAction<IInfo[]>) => {
      state.allFlashInfo = action.payload;
    },
    updateFlashInfo: (state, action: PayloadAction<IInfo>) => {
      state.allFlashInfo.unshift(action.payload);
  },
  },
});

export const {
  setAllFlashInfo,
  updateFlashInfo
} = flashInfoSlice.actions

export default flashInfoSlice.reducer;
