import React from 'react';
import { View  } from 'react-native';
import {VStack, Heading, Icon, useTheme, SearchIcon, Stack, Input } from 'native-base';



export function SearchFail() {
  return (
    
      <Stack space={4} w="75%" maxW="300px" mx="auto">
  
          <Input size="3xl" placeholder="Busca..." />
          
        </Stack>
  );
}