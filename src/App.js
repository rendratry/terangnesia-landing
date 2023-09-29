import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';

import Landing from "./pages/landing";
import SearchResult from "./pages/search-result"
import Products from "./pages/products";
import ProductDetail from "./pages/product-detail";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
            <Route path='/search-product' element={<SearchResult/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/product-detail/:id_product' element={<ProductDetail/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
