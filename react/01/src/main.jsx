import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App";
import "./styles/reset.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
