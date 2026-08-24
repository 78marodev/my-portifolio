import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ClassInput from "./greeting.jsx"; // Imports your component from the other file
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
