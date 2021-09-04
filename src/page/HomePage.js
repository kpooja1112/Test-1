import React, { useState, useEffect } from "react";
import Posts from "../components/Posts";
import getPosts from "../services/getPost";
import "../styles/style.css";

const HomePage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(
      (async () => {
        const Result = await getPosts();
        if (Result.status === "success") {
          setPosts(Result.data.slice(1, 10));
        } else {
          console.log(`Error, unable to fetch posts`);
        }
      })(),
      5000
    );
  }, []);

  return (
    <div className="bg-light mx-auto p-2 page-wrapper">
      <Posts posts={posts} />
    </div>
  );
};

export default HomePage;
