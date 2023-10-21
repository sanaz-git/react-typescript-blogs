import { useState } from "react";
import BlogsList from "../components/BlogsList";
import { IBlog } from "../types/blog.types";
import { getBlogs } from "../functions/fakeData";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<IBlog[]>(getBlogs());

  return (
    <>
      <BlogsList blogs={blogs} />
    </>
  );
}
