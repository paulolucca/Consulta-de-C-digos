import { StatusBar, NativeBaseProvider, Heading, VStack } from 'native-base';
import React, {useState} from 'react';
import { Button } from './src/pages/Components/Button';
import { Home } from './src/pages/Home/Home';
import { StyleSheet, Text, View } from 'react-native';


import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { ScaniaFail } from './src/pages/Scania/Scania';
import { MercedesFail } from './src/pages/Mercedes/mercedes';


export default function App() {
  return (

 <NativeBaseProvider>

      <Home/>

      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent

      />
    </NativeBaseProvider>








  );
}




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