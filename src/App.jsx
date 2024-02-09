import { useState } from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/keyboard";

import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Episodes } from "./components/Episodes";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
