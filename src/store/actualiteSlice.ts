import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IActualiteState {
    // firstActualite: IActualite;
    allActualite: IActualite[];
    loadingActualite: boolean;
}

export interface IActualite {
    idActualite: number;
    titre: string;
    sousTitre: string;
    texteComplet: string;
    actualiteImage: string;
    dateActualite: string;
    idDossier: number;
    active: number;
    aLaUne: number;
}

const initialState: IActualiteState = {
    // firstActualite: {},
    allActualite: [],
    loadingActualite: true,
}

export const actualiteSlice = createSlice({
    name: "actualite",
    initialState: initialState,
    reducers: {
        //   setFirstActualte: (state, action: PayloadAction<IActualite>) => {
        //     state.firstActualite = action.payload;
        //   },
        setAllActualite: (state, action: PayloadAction<IActualite[]>) => {
            state.allActualite = action.payload;
        },
        setLoadingActualite: (state, action: PayloadAction<boolean>) => {
            state.loadingActualite = action.payload;
        },
        updateAllActualite: (state, action: PayloadAction<IActualite>) => {
            state.allActualite.unshift(action.payload);
        },
    },
});

export const {
    setAllActualite,
    setLoadingActualite,
    updateAllActualite
} = actualiteSlice.actions

export default actualiteSlice.reducer;