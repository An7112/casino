import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    internalRouter: 'ALL LIVE CASINO PRODUCTS',
}

const casinoSlice = createSlice({
    name: 'casino',
    initialState,
    reducers: {
        setInternalRouter: (state, action) => {
            state.internalRouter = action.payload
        },
    }
})

export const { 
    setInternalRouter, 
} = casinoSlice.actions;

export default casinoSlice.reducer;
