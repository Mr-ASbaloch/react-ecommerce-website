import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageContent from  "./Components/PageContent/PageContent"
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>

    <BrowserRouter>

    <Header/>
     <PageContent/>
    </BrowserRouter>
  

    
    </>
  );
}

export default App;
