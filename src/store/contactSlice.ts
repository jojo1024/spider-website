import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IContactState {
  allContact: IContact[];
}

export interface IContact {
  idContact: number;
  libContact?: string;
  numero?: string;
  active?: number;
}
const initialState: IContactState = {
  allContact: [],
}

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    setAllContact: (state, action: PayloadAction<IContact[]>) => {
      state.allContact = action.payload;
    },
  },
});

export const {
  setAllContact
} = contactSlice.actions

export default contactSlice.reducer;
