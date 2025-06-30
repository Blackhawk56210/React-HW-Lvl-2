import { useState } from "react";
import "./App.css";
import Home from "./pages/home.jsx";
import Inventory from './pages/inventory.jsx'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Footer from './components/footer.jsx'
import Support from './pages/support.jsx'

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />}/>
        <Route path="/support" element={<Support />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
