import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Episodes } from "./components/Episodes";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
