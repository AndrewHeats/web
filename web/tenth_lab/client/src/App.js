import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Nav from "./components/nav/nav";
import "./components/nav/nav.css";
import Footer from "./components/footer/footer";
import "./components/footer/footer.css";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Catalog from "./pages/catalog/catalog";
import ZooViewMore from "./pages/item/item";

function App() {
 

  return (
    <Router>
      <Nav /> {/* Include your navigation component */}
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Catalog" element ={<Catalog/>} />
        <Route path="/Catalog/:id" element={< ZooViewMore/>} />
        <Route path="/Cart" element ={<Cart/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
