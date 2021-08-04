import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: 1,
            postID: 1,
            user: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur.',
            rating: 3
        },
        {
            id: 2,
            postID: 1,
            user: 1,
            content: 'Lorem ipsum dolor sit amet elit.',
            rating: 5
        },
        {
            id: 3,
            postID: 2,
            user: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque minima, repudiandae sunt vel veritatis!',
            rating: 5
        },
        {
            id: 4,
            postID: 1,
            user: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur repudiandae sunt vel?',
            rating: 5
        },
        {
            id: 5,
            postID: 2,
            user: 1,
            content: 'Lorem ipsum dolor sit  elit. Asperiores atque minima, repudiandae sunt!',
            rating: 10
        }
    ]
};

export const commentsSlice = createSlice({
    name: "comments",

    initialState,

    reducers: {
        add(state, action) {
            const comment = {
                id: 1 + Math.max(0, ...state.list.map((x) => x.id)),
                postID: action.payload.postID,
                user: 1,
                content: action.payload.content,
                rating: 0
            };
            state.list.push(comment);
        },
        remove(state, action) {
            state.list = state.list.filter((comment) => comment.id !== action.payload);
        },
        edit(state, action) {

        },
        removeAll(state, action) {

        },
        increaseRating(state, action) {
            state.list.map(comment => {
                if(comment.id === action.payload) {
                    comment.rating = comment.rating + 1
                }
                return state
            })
        },
        decreaseRating(state, action) {

            state.list.map(comment => {
                if(comment.id === action.payload && comment.rating !== 0) {
                    comment.rating = comment.rating - 1
                }
                return state
            })

            state.list.map(comment => comment.id === action.payload && comment.rating - 1)
        }

    }
});

export const { add, remove, removeAll, increaseRating, decreaseRating } = commentsSlice.actions;

export default commentsSlice.reducer;
