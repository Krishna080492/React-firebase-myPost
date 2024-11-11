const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  post: [],
};

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default PostSlice.reducer;
