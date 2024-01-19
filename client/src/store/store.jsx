import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";

const authInitialState = {authenticated: false}

const auth = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        login(state, payload){
            console.log("the user has login")
            state.authenticated = true;
        },
        register(state){
            console.log("the user has registered")
            state.authenticated = true;
        }, 
        logout(state){
            console.log("the user has logout")
            state.authenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        auth: auth.reducer,
    }
})

export const authActions = auth.actions;

export default store