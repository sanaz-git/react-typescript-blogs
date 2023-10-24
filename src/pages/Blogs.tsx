import { useEffect, useState } from "react";
import BlogsList from "../components/BlogsList";
import { IBlog } from "../types/blog.types";
// import { getBlogs } from "../functions/fakeData";
import { useApiGet } from "../functions/FetchApi";
import { Cookies, useCookies } from "react-cookie";

export default function BlogPage() {
  const { data, getAPIData, status } = useApiGet();

  const [cookies] = useCookies(["accessToken"]);
  const token = cookies.accessToken;
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    getAPIData("/blog", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    setBlogs(data?.data?.blogs || []);
  }, [status]);
  // console.log(data.data.blogs);

  return (
    <>
      {token ? (
        <BlogsList blogs={blogs} />
      ) : (
        <h1 className="text-center p-3">unAuthorization</h1>
      )}
    </>
  );
}
