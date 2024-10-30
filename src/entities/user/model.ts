import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    username: string;
    password: string;
}

export interface UserState {
    username: string | null;
}

const initialState: UserState = {
    username: null,
};

export const userModel = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.username = action.payload.username;
        },
        removeUser: (state) => {
            state.username = null;
        },
    },
});

export const { setUser, removeUser } = userModel.actions;

export default userModel.reducer;
