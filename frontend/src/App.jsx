import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from "./components/SearchBar";

const App = () => {
    return (
        <div className="px-2 sm:px-[ 5vw] md:px-[7vw] lg:px-[9vw]">
            <ToastContainer />
            <Header />
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:productId" element={<Product />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;