import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/PostSlice";

const store = configureStore({
  reducer: {
    post: postReducer, //it comes from postslice
  },
});

export default store;
