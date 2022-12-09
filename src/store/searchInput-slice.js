import { createSlice } from "@reduxjs/toolkit";

const searchInputSlice = createSlice({
    name: 'searchInput',
    initialState: {
        data: [],
        loading: true,
        success: false },
    reducers: { 
        updateSearchResults(state, action){
            state.data = action.payload.data;
            state.success = action.payload.success;
            state.loading = action.payload.loading
        },
    }
});

export const searchInputActions = searchInputSlice.actions;

export default searchInputSlice;