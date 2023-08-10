import React from "react";
import { createRoot } from "react-dom/client";

import App from "./pages/App";
import "./index.css";

// @TODO: Add Arweave dependencies
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
