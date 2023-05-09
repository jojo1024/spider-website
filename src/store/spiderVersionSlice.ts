import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISpiderVersionState {
    // firstActualite: IActualite;
    allSpiderVersions: ISpiderVersion[];
    loadingSpiderVersion: boolean;
}

export interface ISpiderVersion {
    idSpiderVersion: number,
    versionNumber: string, 
    versionDescription: string, 
    versionFileLocation: string, 
    versionDate: any,
    VersionDescriptionArray: string
}

const initialState: ISpiderVersionState = {
    allSpiderVersions: [],
    loadingSpiderVersion: true,
}

export const spiderVersionSlice = createSlice({
    name: "spiderVersion",
    initialState: initialState,
    reducers: {
        //   setFirstActualte: (state, action: PayloadAction<IActualite>) => {
        //     state.firstActualite = action.payload;
        //   },
        setAllSpiderVersions: (state, action: PayloadAction<ISpiderVersion[]>) => {
            state.allSpiderVersions = action.payload;
        },
        setLoadingSpiderVersion: (state, action: PayloadAction<boolean>) => {
            state.loadingSpiderVersion = action.payload;
        },
        updateAllSpiderVersions: (state, action: PayloadAction<ISpiderVersion>) => {
            state.allSpiderVersions.unshift(action.payload);
        },
    },
});

export const {
    setAllSpiderVersions,
    setLoadingSpiderVersion,
    updateAllSpiderVersions
} = spiderVersionSlice.actions

export default spiderVersionSlice.reducer;