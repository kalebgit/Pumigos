import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";

const authInitialState = {authenticated: false, user: {email: ""}}

const auth = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        login(state, payload){
            console.log("login with: " + payload.payload.email)
            state.authenticated = true;
            state.user.email = payload.payload.email;
        },
        register(state, payload){
            console.log("register with: " + payload.payload.email)
            state.authenticated = true;
            state.user.email = payload.payload.email;
        },
        logout(state){
            console.log("logout of: " + payload.payload.email)
            state = authInitialState
        }
    }
})

const store = configureStore({
    reducer: {
        //you have to access each reducer of every slice
        auth: auth.reducer
    }
})

export const authActions = auth.actions
export default store