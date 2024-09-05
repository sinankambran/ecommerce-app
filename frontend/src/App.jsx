import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import Contact from "./pages/Contact";


import About from "./pages/About";
import Collection from "./pages/Collection";

const App = () => {
  return (
    <div className="px-4 sm:px-[ 5vw] md:px-[7vw] lg:px-[9vw]">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />

     
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
