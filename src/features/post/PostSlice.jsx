import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";
import { act } from "react";

const initialState = {
  posts: [],
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

// fetch data
export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (_, { rejectWithValue }) => {
    //_1st parameter blank cz, data fetch thaine avse
    try {
      let res = await apiInstance.get("/.json");
      // console.log(res);
      return Object.keys(res.data).map((key) => ({
        id: key,
        ...res.data[key],
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete data
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      await apiInstance.delete(`/${id}.json`);
      return id;
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
    // create data :
    builder //it generate request
      .addCase(createPost.pending, (state, action) => {
        state.loading = true; //starting ma loading process false 6e so e true thase
        state.status = "pending..";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false; //pending ma loading process true thai gai so false thase ahiya
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //fetch data:
      .addCase(fetchPost.pending, (state, action) => {
        state.loading = true;
        state.status = "pending..";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        // console.log(state.post);    //object to array convert
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //delete data :
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      });
  },
});

export default PostSlice.reducer;
