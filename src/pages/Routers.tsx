import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Admin from "./Admin";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/dashboard" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
