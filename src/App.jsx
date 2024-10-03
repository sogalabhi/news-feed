import React, { useState, useEffect } from "react";
import Feed from "./components/pages/feed";
import Search from "./components/pages/search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Login from "./components/pages/login";
import Register from "./components/pages/register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Feed /></>} />
          <Route path="/feed" element={<><Navbar /><Feed /></>} />
          <Route path="/search" element={<><Navbar /><Search /></>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>


    </>

  )
}