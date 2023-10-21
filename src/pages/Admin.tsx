import React, { useState } from "react";
import BlogTableComponents from "../components/BlogTables";
import { IBlog } from "../types/blog.types";
import { getBlogs } from "../functions/fakeData";

const Admin = () => {
  const [blogs, setBlogs] = useState<IBlog[]>(getBlogs());
  return (
    <div>
      <BlogTableComponents blogs={blogs} />
    </div>
  );
};

export default Admin;
