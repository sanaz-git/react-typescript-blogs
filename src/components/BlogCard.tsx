/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC } from "react";
import { IPropsBlog } from "../types/blog.types";

const BlogCardComponent: FC<IPropsBlog> = ({ blog, key }) => {
  return (
    <>
      <div className="w-full shadow-md lg:max-w-sm p-2" key={key}>
        <img
          className="object-cover w-full h-48"
          src="https://picsum.photos/id/237/536/354"
          alt=""
        />
        <div className="p-4">
          <h4 className="text-xl font-semibold text-blue-600">{blog.title}</h4>
          <p className="mb-2 leading-normal">{blog.text}</p>
          <button className="px-4 py-2 mr-4 text-sm text-black-500 bg-gray-100 rounded shadow">
            {blog.author}
          </button>
          <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
            Read more
          </button>
        </div>
      </div>
    </>
  );
};
export default BlogCardComponent;
