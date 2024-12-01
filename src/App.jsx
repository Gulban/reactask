import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Basket />} />
            <Route path="*" element={<NoPage />} />
         </ Route>
        </Routes>
      </BrowserRouter> 
      </>
  )
};



      

export default App;