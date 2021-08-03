import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts";
import commentsReducer from "./comments";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    }
});

export default store;
