import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

const initialState = {
  post: [],
  error: null, //it shows error
  // status: "", //it shows api status like: pending,fullfilled, rejected
  loading: false,
};

// create thunk and store data
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost, { rejectWithValue }) => {
    try {
      let res = await apiInstance.post("/.json", newPost);
      return { ...newPost, id: res.data.name };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //when u use thunk u have to use extrareducers store data state
    builder //it generate request
      .addCase(createPost.pending, (state, action) => {
        state.loading = true; //starting ma loading process false 6e so e true thase
        state.status = "pending..";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false; //pending ma loading process true thai gai so false thase ahiya
        state.post.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default PostSlice.reducer;
