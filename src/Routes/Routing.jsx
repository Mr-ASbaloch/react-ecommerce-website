import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Category/Home/Home";
import Category from "../Pages/Category/Category";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:CategoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
