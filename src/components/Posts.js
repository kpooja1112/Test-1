import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="d-flex flex-wrap">
      {posts
        ? posts.map((post, index) => <Post key={`post-${index}`} post={post} />)
        : [...Array(9)].map((ele, index) => <Post key={`post-${index}`} />)}
    </div>
  );
};

export default Posts;
