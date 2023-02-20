import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Home } from '../../../pages/Home/Home';
import { ScaniaFail } from '../../../pages/Scania/Scania';
import { MercedesFail } from '../../../pages/Mercedes/mercedes';

export function RouterDefinida() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path= "ScaniaFail" element={<ScaniaFail />} />
        <Route path= "MercedesFail" element={<MercedesFail/>} />
    </Routes>
    
    
    
    </BrowserRouter>


  );
}