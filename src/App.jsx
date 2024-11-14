import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, deletePost, fetchPost } from "./features/post/PostSlice";

function App() {
  let [post, setPost] = useState({});
  const { posts, error, loading } = useSelector((state) => state.post); //destructure

  let dispatch = useDispatch();

  let handleInput = (e) => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
    // console.log(post);
  };

  useEffect(() => {
    dispatch(fetchPost()); //data fetch
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    dispatch(createPost(post));
    // dispatch(fetchPost());
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

        {/* fetch data */}
        <h2 className="text-center"> Data</h2>
        <table className="table " border={1}>
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Discription</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.dsc}</td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => dispatch(deletePost(post.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
