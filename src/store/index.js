import { configureStore } from "@reduxjs/toolkit";
import searchInputSlice from "./searchInput-slice";
import itemDetailsSlice from "./itemDetails-slice";

const store = configureStore({
    reducer: {itemDetails: itemDetailsSlice.reducer, searchInput: searchInputSlice.reducer}
});

export default store;