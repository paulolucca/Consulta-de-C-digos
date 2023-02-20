import React from 'react';
import { Component } from 'react';
import { Button } from '../Components/Button';
import { VStack, Heading, Icon, useTheme, Center } from 'native-base';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { StyleSheet, Text, View } from 'react-native';
import { SearchFail } from '../Components/Search';
import { RouterDefinida } from '../Components/assets/Caminhos'


export function Home() {

  const { colors } = useTheme();

  return (

    <VStack flex={1} alignItems="center" bg="gray.300" px={8} pt={24}>

      <Heading color='blue.800' fontSize={'xl'} mt={15} mb={5} >

        Aplicativo de Consulta de Falhas



      </Heading>


      <SearchFail />



      <Button
        title="Scania"
        w="full"
        boxSize='150'
        m={5}
        


      />
        



      <Button
        title="Mercedes"
        w="full"
        boxSize='150'
        m={4}
      />




    </VStack>

  );
}