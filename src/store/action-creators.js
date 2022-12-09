import { itemDetailsActions } from "./itemDetails-slice";
import { searchInputActions } from "./searchInput-slice";


export const fetchSearchResults = (url) => {
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(searchInputActions.updateSearchResults({
                loading: true,
                success: false,
                data: []
            }))
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Couldnot fetch data");
            }
            const data = response.json();
            return data;
        }
        try{
            const searchResultsData = await fetchData();
            dispatch(searchInputActions.updateSearchResults({
                data: searchResultsData, 
                loading: false,
                success: true,
            }));

        }
        catch(error){
            dispatch(searchInputActions.updateSearchResults({
                data: [], 
                loading: false,
                success: false,
            }));
        }
        
    };
};

export const fetchItemDetails = (url) => {
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(itemDetailsActions.updateItemDetails({
                loading: true,
                success: false,
                details: []
            }))
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Couldnot fetch data");
            }
            const data = response.json();
            return data;
        }
        try{
            const itemDetailsData = await fetchData();
            dispatch(itemDetailsActions.updateItemDetails({
                details: itemDetailsData, 
                loading: false,
                success: true,
            }));

        }
        catch(error){
            dispatch(itemDetailsActions.updateItemDetails({
                details: [], 
                loading: false,
                success: false,
            }));
        }
        
    };
};