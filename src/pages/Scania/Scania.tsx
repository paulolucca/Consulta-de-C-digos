import React from 'react';
import { View } from 'react-native';
import { theme, VStack, Heading, useTheme } from 'native-base';
import { Button } from '../Components/Button'


export function ScaniaFail() {

  const { colors } = useTheme();
  return (
    <VStack>

      <Heading>


        <Button
          title='EMS'
          w="Full"
          boxSize='150'
          m={5}
        
        />

        <Button
          title='GMS'
          w="Full"
          boxSize='150'
          m={5}
        />


      </Heading>



    </VStack>
  );
}