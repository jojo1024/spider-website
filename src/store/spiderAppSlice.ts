
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISpiderAppState {
    allSpiderApp: ISpiderApp[];
    loadindSpiderApp: boolean;
}

export interface ISpiderApp {
    idApp: number;
    libApp: string;
    descriptionApp: string;
    logoApp: string;
    checkListe: string;
    paragrapheListe: string;
    texteComplet: string;
    active: number;
    idAppImage: number;
    libAppImage: string;
}

const initialState: ISpiderAppState = {
    allSpiderApp: [],
    loadindSpiderApp: true,
}

export const spiderAppSlice = createSlice({
    name: "spiderApp",
    initialState: initialState,
    reducers: {
  
        setAllSpiderApp: (state, action: PayloadAction<ISpiderApp[]>) => {
            state.allSpiderApp = action.payload;
        },
        setLoadindSpiderApp: (state, action: PayloadAction<boolean>) => {
            state.loadindSpiderApp = action.payload;
        },
        updateAllApplication: (state, action: PayloadAction<ISpiderApp>) => {
            state.allSpiderApp.push(action.payload);
        },
       
    },
});

export const {
    setAllSpiderApp,
    setLoadindSpiderApp,
    updateAllApplication
} = spiderAppSlice.actions

export default spiderAppSlice.reducer;


