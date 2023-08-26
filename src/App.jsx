import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageContent from  "./Components/PageContent/PageContent"
import { BrowserRouter } from "react-router-dom";
import GetAllProducts from "./APi";


function App() {
  return (
    <>

    <BrowserRouter>

    <Header/>
     <PageContent/>
     <Footer/>
    </BrowserRouter>
    <GetAllProducts/>

    
    </>
  );
}

export default App;
