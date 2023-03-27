import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";

export function Home() {
  // const posts = [
  //   { id: 1, title: "title", subline: "sicksubline", body: "honk" },
  //   { id: 2, title: "title", subline: "sicksubline", body: "honk" },
  // ];

  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <h1>Welcome to React!</h1>
      <PostsIndex posts={posts} />
    </div>
  );
}
