/* eslint-disable jsx-a11y/anchor-is-valid */

import { FC } from "react";
import { PropsBlogs } from "../types/blog.types";
import { useApiDelete } from "../functions/FetchApi";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIE_NAMES } from "../enums/public.enums";

const BlogTableComponents: FC<PropsBlogs> = ({ blogs }) => {
  const [deleteAPIData] = useApiDelete();
  const [cookies] = useCookies([COOKIE_NAMES.ACCESS_TOKEN]);
  const token = cookies.accessToken;
  const history = useNavigate();
  function deleteHandler(id: string) {
    deleteAPIData(`/blog/delete/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    history("/blogs");
  }
  return (
    <div className="flex flex-col mt-5 p-5">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    BlogTitle
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    BlogAuthor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Text
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog, key) => (
                  <tr key={key}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {blog._id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {blog.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {blog.author}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right  whitespace-nowrap">
                      {blog.text}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-red-500 hover:text-red-700"
                        href="#"
                        onClick={() => {
                          deleteHandler(blog._id);
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTableComponents;
function deleteAPIData(
  arg0: string,
  arg1: { headers: { authorization: string } }
) {
  throw new Error("Function not implemented.");
}
