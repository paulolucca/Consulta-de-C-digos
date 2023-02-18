import React from 'react';

import { Component } from 'react';


import {VStack, Heading, Icon, useTheme} from 'native-base';

export  function Home() {

  const{colors } = useTheme();

  return (

    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>

    <Heading color='gray.100'fontSize={'xl'}  mt={20} mb={6}  >

      Aplicativo de Consulta de Falhas
      

    </Heading>

    </VStack>
    
  );
}