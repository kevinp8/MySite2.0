import "./reset.css";
import "./App.css";
import React from "react";
import Top from "./components/Top";
import Nav from "./components/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Top />
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
