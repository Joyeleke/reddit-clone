import { configureStore } from "@reduxjs/toolkit";
import PostFeedReducer from "../features/PostFeed/PostFeedSlice";

const store = configureStore({
    reducer: {
        posts: PostFeedReducer
    }
})

export default store;