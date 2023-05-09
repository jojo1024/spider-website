
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IEtablissementState {
    allEtablissement: IEtablissement[];
    nombreEtablissement: number;
}

export interface IEtablissement {
    idEtab?: number;
    libEtab?: string;
    libImageEtab?: string;
 
}

const initialState: IEtablissementState = {
    allEtablissement: [],
    nombreEtablissement: 830
}

export const etablissementSlice = createSlice({
    name: "etablissement",
    initialState: initialState,
    reducers: {
        setAllEtablissement: (state, action: PayloadAction<IEtablissement[]>) => {
            state.allEtablissement = action.payload;
        },
        setNombreEtablissement: (state, action: PayloadAction<number>) => {
            state.nombreEtablissement = action.payload;
        },
    },
});

export const {
    setAllEtablissement,
    setNombreEtablissement
} = etablissementSlice.actions

export default etablissementSlice.reducer;


