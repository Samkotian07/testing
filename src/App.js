import React from "react"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Consulting from "./Pages/Consulting";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App