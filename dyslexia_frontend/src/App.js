import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './container/Home';



const App = () => {

  return (
    <>
    
      <Routes>
          <Route path="/*" element={<Home />} />
          
        </Routes>



    </>
    
  );
};

export default App;
