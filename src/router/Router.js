import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../container/login/Login";
import Product from "../container/product/product";
import Home from "../container/supplier";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
