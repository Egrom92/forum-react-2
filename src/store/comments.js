import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
};

export const commentsSlice = createSlice({
    name: "comments",

    initialState,

    reducers: {
        add(state) {
            const item = {
                id: 1 + Math.max(0, ...state.list.map((x) => x.id))
            };
            state.list.push(item);
        },


        remove(state, action) {
            state.list = state.list.filter((el) => el.id !== action.payload);
        },

    }
});

export const { add, remove } = commentsSlice.actions;

export default commentsSlice.reducer;
