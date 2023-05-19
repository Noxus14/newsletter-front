import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        id: null,
        email: null,
        displayName: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.id = payload.id;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.errorMessage = null;

        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.id = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        subscribe: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.errorMessage = null;
        }
    }
});

export const { login, logout, checkingCredentials, subscribe } = authSlice.actions;