import React from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/style.css";

import Home from "./pages/Home/Home";
import Receipt from "./pages/Receipt/Hostel";
import Hostel from "./pages/Hostel/Hostel";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="*" element={<Error404 />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Error404 />} /> */}
        <Route path="/listReceipt" element={<Receipt />} />
        {/* <Route path="*" element={<Error404 />} /> */}
        <Route path="/hostel" element={<Hostel />} />
      </Routes>
    </div>
  );
}

export default App;
