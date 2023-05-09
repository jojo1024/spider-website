import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import appReducer, { IAppState } from "./appSlice";
import flashInfoReducer, { IFalshInfoState } from "./flashInfoSlice";
import actualiteReducer, { IActualiteState } from "./actualiteSlice";
import bannerReducer, { IBannerState } from "./bannerSlice";
import agentReducer, { IAgentState } from "./agentSlice";
import serviceReducer, { IServiceState } from "./serviceSlice";
import galerieReducer, { IGalerieState } from "./galerieSlice";
import spiderVersionReducer, { ISpiderVersionState } from "./spiderVersionSlice";
import etablissementReducer, { IEtablissementState } from "./etablissementSlice";
import spiderAppReducer, { ISpiderAppState } from "./spiderAppSlice";
import contactReducer, { IContactState } from "./contactSlice";



export interface IReduxState {
    application: IAppState;
    flashInfo: IFalshInfoState;
    actualite: IActualiteState;
    banner: IBannerState;
    agent: IAgentState;
    service: IServiceState;
    galerie: IGalerieState;
    spiderVersion: ISpiderVersionState;
    etablissement: IEtablissementState;
    spiderApp: ISpiderAppState;
    contact: IContactState;

}

const reducers = combineReducers({
    application: appReducer,
    flashInfo: flashInfoReducer,
    actualite: actualiteReducer,
    banner: bannerReducer,
    agent: agentReducer,
    service: serviceReducer,
    galerie: galerieReducer,
    spiderVersion: spiderVersionReducer,
    etablissement: etablissementReducer,
    spiderApp: spiderAppReducer,
    contact: contactReducer,
});

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [""], // liste des slices qui doivent etre persister
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export default store;
