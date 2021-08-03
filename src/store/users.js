import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            username: 'user1',
            password: 'pass',
        },
        {
            id: 2,
            username: 'user2',
            password: 'pass',
        },
        {
            id: 3,
            username: 'user3',
            password: 'pass',
        }
    ]
};

export const usersSlice = createSlice({
    name: "users",

    initialState,

    reducers: {
        check(state, action) {

        }
    }
});

export const { check } = usersSlice.actions;

export default usersSlice.reducer;
