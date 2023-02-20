import React from 'react';
import { View } from 'react-native';
import { theme, VStack, Heading, useTheme } from 'native-base';
import { Button } from '../Components/Button'


export function MercedesFail() {

  const { colors } = useTheme();
  return (
    <VStack>

      <Heading>


        <Button
          title='MR'
          w="Full"
          boxSize='150'
          m={5}
        />

        <Button
          title='FR'
          w="Full"
          boxSize='150'
          m={5}
        />


      </Heading>



    </VStack>
  );
}