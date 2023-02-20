import React from 'react';
import { Button as ButtonNativeBase, IButtonProps, Heading, theme } from 'native-base';


type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {

  return (
    <ButtonNativeBase
      //cor de fundo
      bg="blueGray.800"
      //tamanho
      h={50}
      //fontes da letra
      fontSize="sm"
      //arrodandamento dos cantos
      rounded="sm"
      //cor apos o toque
      _pressed={{ bg: "green.200" }}


      {...rest}
    >

      <Heading color="white" fontSize="sm">
        {title}
      </Heading>



    </ButtonNativeBase>

  );
}