/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC } from "react";
import { IPropsBlog } from "../types/blog.types";

const BlogCardComponent: FC<IPropsBlog> = ({ blogs }) => {
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4 p-5">
        {blogs.map((items, key) => (
          <div className="w-full shadow-md lg:max-w-sm p-2" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.image}
              alt=""
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {items.title}
              </h4>
              <p className="mb-2 leading-normal">{items.text}</p>
              <button className="px-4 py-2 mr-4 text-sm text-black-100 bg-gray-100 rounded shadow">
                {items.author}
              </button>
              <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default BlogCardComponent;
