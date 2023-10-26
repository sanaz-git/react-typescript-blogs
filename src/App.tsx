import { useState } from "react";

import Navbar from "./components/Navbar";

import { useCookies } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Routers";
import { COOKIE_NAMES } from "./enums/public.enums";

function App() {
  const [cookies] = useCookies([COOKIE_NAMES.USER, COOKIE_NAMES.ACCESS_TOKEN]);
  console.log(cookies.accessToken);
  console.log(cookies.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
