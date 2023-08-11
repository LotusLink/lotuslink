import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Active from "./Active";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import State from "../context/state";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <State>
        {" "}
        {/* Wrap the Routes inside the State provider */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active" element={<Active />} /> {/* Add this line */}
          {/* You can add more routes here if needed */}
        </Routes>
      </State>
      <Footer />
    </HashRouter>
  );
}
