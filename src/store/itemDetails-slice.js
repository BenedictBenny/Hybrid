import { createSlice } from "@reduxjs/toolkit";

const itemDetailsSlice = createSlice({
    name: 'itemDetails',
    initialState: {
        details: [],
        loading: false,
        success: false },
    reducers: { 
        updateItemDetails(state, action){
            state.details = action.payload.details;
            state.success = action.payload.success;
            state.loading = action.payload.loading
        },
    }
});

export const itemDetailsActions = itemDetailsSlice.actions;

export default itemDetailsSlice;