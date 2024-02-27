import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './container/Home';


const App = () => {

  return (
    <>
        <Routes>
          {/* <Route path="Login" element={<Login />} /> */}
          <Route path="/*" element={<Home />} />
        </Routes>

    </>
    
  );
};

export default App;
