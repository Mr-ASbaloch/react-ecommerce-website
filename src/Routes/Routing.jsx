import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Category/Home/Home";
import Category from "../Pages/Category/Category";

const Routing = () => {
  return (
  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:CategoryId" element={<Category />} />
      </Routes>
    
  );
};

export default Routing;
