import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Principal from "./components/Principal";
import Login from "./components/Login";
import Admin from "./components/Admin";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/painel" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
