import React from 'react';
import { Button as ButtonNativeBase, IButtonProps, Heading, theme} from 'native-base';


type Props = IButtonProps &{
    title: string;
}

export function Button ({title, ...rest } :Props) {
  
  return (
    <ButtonNativeBase
    bg="blueGray.700"
    h={14}
    fontSize="sm"
    rounded="sm"

    {...rest}
    
    >




    </ButtonNativeBase>

  );
}