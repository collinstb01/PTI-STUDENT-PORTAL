import React from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/style.css";

import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="*" element={<Error404 />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
