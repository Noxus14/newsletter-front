import { createSlice } from '@reduxjs/toolkit';

export const newsletterSlice = createSlice({
    name: 'newsletter',
    initialState: {
        email: null,
        name: null,
        subcribe: null,
        listUser: []
    },
    reducers: {
        sendNewsletter: (state, { payload} ) => {
            state.email = payload.email;
            state.name = payload.name;
            state.subcribe = payload.subcribe;
        },
        listUserNewsletter: (state, { payload }) => {
            state.listUser = [...payload.listUser];
        }
    }
});


// Action creators are generated for each case reducer function
export const { sendNewsletter, listUserNewsletter} = newsletterSlice.actions;