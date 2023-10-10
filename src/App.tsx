import { useState } from "react";
import BlogTableComponents from "./components/BlogTables";
import Navbar from "./components/Navbar";
import { IBlog } from "./types/blog.types";
import BlogsList from "./components/BlogsList";

function App() {
  const blogsData: IBlog[] = [
    {
      title: "React Tailwind Card with Grid 1",
      author: "author",
      image: "https://picsum.photos/536/354",
      text: "react tailwind css card with image It is along established fact that a reader will be by the readable text",
    },
    {
      title: "React Tailwind Card with Grid 2",
      image: "https://picsum.photos/id/536/354",
      author: "author",
      text: "react tailwind css card with image It is along established fact that a reader will be by the readable text",
    },
    {
      title: "React Tailwind Card with Grid 3",
      author: "author",
      image: "https://picsum.photos/seed/picsum/536/354",
      text: "react tailwind css card with image It is along established fact that a reader will be by the readable text",
    },
    {
      title: "React Tailwind Card with Grid 4",
      author: "author",
      image: "https://picsum.photos/id/1060/536/354?blur=2",
      text: "react tailwind css card with image It is along established fact that a reader will be by the readable text",
    },
  ];
  const [blogs, setBlogs] = useState<IBlog[]>(blogsData);
  return (
    <div className="App">
      <Navbar />
      <BlogTableComponents blogs={blogs} />
      <BlogsList blogs={blogs} />
    </div>
  );
}

export default App;
