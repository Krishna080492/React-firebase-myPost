const { configureStore } = require("@reduxjs/toolkit");
import postReducer from "../features/post/PostSlice"

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
