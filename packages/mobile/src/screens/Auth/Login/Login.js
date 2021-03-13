import React, { useState } from 'react';
import { Text, View } from 'react-native';

import LeftImage from '../../../assets/png/left_auth.png';
import TextInput from '../../../components/TextInput/TextInput';
// import { TextInput } from 'react-native-paper';
import * as S from './Login.style';

// import { Container } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = () => {
    console.log('submit')
  }

  return (
    <>
      <S.Container>
        <S.ImageLeft source={LeftImage} />
        <S.WrapperTitle>
          <S.Title>Seja bem vindo!</S.Title>
        </S.WrapperTitle>
        <S.WrapperFields>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            width={0.75}
            onChange={(value) => setEmail(value)}
            value={email}
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            width={0.75}
            onChange={(value) => setPassword(value)}
            value={password}
            password
          />
        </S.WrapperFields>
        <S.RowSubmit>
          <S.SubmitText>Entrar</S.SubmitText>
          <S.CircleCheck onPress={handlerSubmit}>
            <S.ArrowIcon />
          </S.CircleCheck>
        </S.RowSubmit>
      </S.Container>
    </>
  )
};

export default Login;
