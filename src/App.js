import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import swal from 'sweetalert';

import Login from "./components/Login.js";
import Listado from "./components/Listado.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Pelicula from "./components/Pelicula.js";
import Busqueda from "./components/Busqueda.js";


function App() {
  // swal('wola')

  const funcion = () => {
    console.log("cosas");
  }

  return (
    <BrowserRouter>
      <div>

        <Header />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/listado" render={(props) => <Listado funcion={funcion}  {...props} />} />
            <Route path="/pelicula/*" element={<Pelicula />} />
            <Route path="/busqueda/*" element={<Busqueda />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
