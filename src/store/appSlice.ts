import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
    serverUrl: string;
    scrollToTop: boolean;
}

const initialState: IAppState = {
    // serverUrl: "http://192.168.137.1:50000",
    scrollToTop: true,
    // serverUrl: "http://localhost:50000",
    serverUrl: '',
};

export const appSlice: any = createSlice({
    name: "application",
    initialState: initialState,
    reducers: {
        setServerUrl: (state, action: PayloadAction<string>) => {
            state.serverUrl = action.payload;
        },
        setScrollToTop: (state, action: PayloadAction<boolean>) => {
            state.scrollToTop = action.payload;
        },
    },
});


export const {
    setServerUrl,
    setScrollToTop
} = appSlice.actions;

export default appSlice.reducer;