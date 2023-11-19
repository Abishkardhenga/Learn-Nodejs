import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./Usecontext/UseContext.jsx";
import Protectedroutes from "./Pages/Protectedroutes/Protectedroutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route element={<Protectedroutes />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
);
