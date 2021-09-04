import axios from "axios";

const getPosts = async () => {
  try {
    const Result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const { data } = Result;
    return { status: "success", data: data };
  } catch (e) {
    console.log("Error in fetching posts", e);
    return { status: "error", data: null };
  }
};

export default getPosts;
