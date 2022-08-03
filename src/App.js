import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login.js";
import Listado from "./components/Listado.js";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
