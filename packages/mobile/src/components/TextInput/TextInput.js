import React from 'react';
import * as S from './TextInput.styles';

const TextInput = ({
  width,
  label,
  value,
  onChangeText,
  placeholder,
  mode,
  disabled,
  mask,
  password,
  keyboardType,
}) => {
  return (
    <S.Container width={width}>
      <S.Label>{label}</S.Label>
      <S.InputText
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        disabled={disabled}
        keyboardType={keyboardType}
        secureTextEntry={password}
      />
    </S.Container>
  );
}

export default TextInput;