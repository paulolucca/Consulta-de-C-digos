import { StatusBar, NativeBaseProvider } from 'native-base';
import React from 'react';
import { Button } from './src/pages/Components/Button';
import { Home } from './src/pages/Home/Home';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      
      <Home/>

      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent

      />

      <Button 
      title='Scania'
      w="Full"
      />

      <Button 
      title='Mercedez'
      w="full"
      />


      </NativeBaseProvider>
    
  );
}


