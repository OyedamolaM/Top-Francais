import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // or index.scss if using SCSS
import "@fortawesome/fontawesome-free/css/all.min.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

