import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
