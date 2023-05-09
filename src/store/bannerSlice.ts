import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBannerState {
  allBanner: IBanner[];
}

export interface IBanner {
  idBanniere?: number,
  libBanniere?: string,
  active?: number,
}

const initialState: IBannerState = {
  allBanner: [],
}


export const bannerSlice = createSlice({
  name: "banner",
  initialState: initialState,
  reducers: {
    setAllBanner: (state, action: PayloadAction<IBanner[]>) => {
      state.allBanner = action.payload;
    },
  //   updateAllBanner: (state, action: PayloadAction<IActualite>) => {
  //     state.allActualite.unshift(action.payload);
  // },
  },
});

export const {
  setAllBanner
} = bannerSlice.actions

export default bannerSlice.reducer;
