import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';

import Landing from "./pages/landing";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
