import { useEffect, useState } from "react";
import BlogsList from "../components/BlogsList";
import { IBlog } from "../types/blog.types";
import { getBlogs } from "../functions/fakeData";
import { useApiGet } from "../functions/FetchApi";
import { Cookies, useCookies } from "react-cookie";

export default function BlogPage() {
  const { data, getAPIData } = useApiGet();

  const [cookies] = useCookies(["accessToken"]);
  const token = cookies.accessToken;

  useEffect(() => {
    getAPIData("/blog", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }, []);
  // console.log(data.data.blogs);

  const [blogs, setBlogs] = useState<any>(data?.data.blogs || []);

  return (
    <>
      {token ? (
        <BlogsList blogs={data.data.blogs} />
      ) : (
        <h1 className="text-center p-3">unAuthorization</h1>
      )}
    </>
  );
}
