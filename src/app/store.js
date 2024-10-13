import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../User/user";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});
