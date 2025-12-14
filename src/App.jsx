import React from "react";
import Navbar from "./components/Navbar";
import WaterRipple from "./components/WaterRipple";
import { Routes, Route } from "react-router-dom";

// ROUTE PAGES
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import LoginModal from "./pages/LoginModal";
import BookNow from "./components/BookNow";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginModal" element={<LoginModal />} />
        <Route path="/book" element={<BookNow />} />
      </Routes>
    </div>
  );
}

export default App;
