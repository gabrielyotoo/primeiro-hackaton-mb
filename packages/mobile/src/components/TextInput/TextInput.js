import React from 'react';
import { View } from 'react-native';
import * as S from './TextInput.styles';

const TextInput = ({
  width,
  label,
  value,
  onChange,
  placeholder,
  mode,
  disabled,
  mask,
  password,
  keyboardType,
}) => {
  return <S.InputText
    width={width}
    password={password}
    label={label}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    mode={mode}
    disabled={disabled}
    keyboardType={keyboardType}
  />;
}

export default TextInput;