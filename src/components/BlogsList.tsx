/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC } from "react";
import { PropsBlogs } from "../types/blog.types";
import BlogCardComponent from "./BlogCard";

const BlogsList: FC<PropsBlogs> = ({ blogs }) => {
  const Cards: JSX.Element[] = blogs.map((blog, _id) => (
    <BlogCardComponent blog={blog} key={_id} />
  ));
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 p-5">{Cards}</div>
    </>
  );
};
export default BlogsList;
