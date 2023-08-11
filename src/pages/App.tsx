import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Active from "./Active";

import State from "../context/state";

export default function App() {
  return (
    <HashRouter>
      <State>
        {" "}
        {/* Wrap the Routes inside the State provider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active" element={<Active />} /> {/* Add this line */}
          {/* You can add more routes here if needed */}
        </Routes>
      </State>
    </HashRouter>
  );
}
