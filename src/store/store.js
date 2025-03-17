import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer"
import postReducer from "./reducers/postReducer"
import { configureStore } from "@reduxjs/toolkit";

const initialState={
    posts: {
        posts: [],
        loading: false,
        error: null,
    }
}
const store=configureStore({
    reducer: {
        posts: postReducer,
    },
    preloadedState: initialState,
});

export default store;

//old way to configure
//const store=createStore(counterReducer);
/*
const store=configureStore({
    reducer: {
        counter: counterReducer,
    }    
});
*/