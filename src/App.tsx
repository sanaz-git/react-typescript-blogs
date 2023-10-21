import { useState } from "react";

import Navbar from "./components/Navbar";

import { useCookies } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Routers";

function App() {
  const [cookies] = useCookies(["accessToken", "user"]);
  console.log(cookies.accessToken);
  console.log(cookies.user);
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
