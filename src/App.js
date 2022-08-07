import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import swal from 'sweetalert';

import Login from "./components/Login.js";
import Listado from "./components/Listado.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Pelicula from "./components/Pelicula.js";


function App() {
  swal('wola')

  return (
    <BrowserRouter>
      <div>

        <Header />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/listado" element={<Listado />} />
            <Route path="/pelicula/*" element={<Pelicula />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
