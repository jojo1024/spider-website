
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAgentState {
    allAgent: IAgent[];
    loadingAgent: boolean;
}

export interface IAgent {
    idAgent: number;
    nomAgent: string;
    fonctionAgent: string;
    idService: number;
    active: number;
    photoAgent: string;
}

const initialState: IAgentState = {
    allAgent: [],
    loadingAgent: true
}

export const agentSlice = createSlice({
    name: "agent",
    initialState: initialState,
    reducers: {
  
        setAllAgent: (state, action: PayloadAction<IAgent[]>) => {
            state.allAgent = action.payload;
        },
        updateAllAgent: (state, action: PayloadAction<IAgent>) => {
            state.allAgent.push(action.payload);
        },
        setLoadingAgent: (state, action: PayloadAction<boolean>) => {
            state.loadingAgent = action.payload;
        },
    },
});

export const {
    setAllAgent,
    updateAllAgent,
    setLoadingAgent
} = agentSlice.actions

export default agentSlice.reducer;


