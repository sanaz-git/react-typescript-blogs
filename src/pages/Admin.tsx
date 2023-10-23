import React, { useEffect, useState } from "react";

// import { getBlogs } from "../functions/fakeData";
import { useApiGet } from "../functions/FetchApi";
import { useCookies } from "react-cookie";
import BlogsList from "../components/BlogsList";
import BlogTableComponents from "../components/BlogTables";

const Admin = () => {
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
        <BlogTableComponents blogs={blogs} />
      ) : (
        <h1 className="text-center p-3">unAuthorization</h1>
      )}
    </>
  );
};

export default Admin;
