import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Login from "./views/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
