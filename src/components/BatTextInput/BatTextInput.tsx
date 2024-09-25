import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextIUnputProps{
  pass:string
}

export function BatTextInput(props: BatTextIUnputProps) {
  return (   
        <TextInput
        style={styles.inputer}
        placeholder='pass'
        value={props.pass}      
        />
  );
}