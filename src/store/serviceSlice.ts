import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IServiceState {
  service: IService[];
}

export interface IService {
    idService?: number;
    libService?: string;
}
const initialState: IServiceState = {
  service: [],
}

export const serviceSlice = createSlice({
  name: "service",
  initialState: initialState,
  reducers: {
    setService: (state, action: PayloadAction<IService[]>) => {
      state.service = action.payload;
    },
  },
});

export const {
  setService
} = serviceSlice.actions

export default serviceSlice.reducer;
