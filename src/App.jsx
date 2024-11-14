import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "./features/post/PostSlice";

function App() {
  let [post, setPost] = useState({});

  let dispatch = useDispatch();

  let handleInput = (e) => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
    // console.log(post);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    dispatch(createPost(post))
  };

  return (
    <>
      <div className="container">
        <form className="w-50 m-auto my-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="dsc"
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
