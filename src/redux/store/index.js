import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteListReducer from '../reducers/favoriteList';
import searchResultReducer from "../reducers/searchResult";

const greatReducer = combineReducers({
    favorite: favoriteListReducer,
    searchResult: searchResultReducer,
})

const store = configureStore({
    reducer: greatReducer,
})

export default store