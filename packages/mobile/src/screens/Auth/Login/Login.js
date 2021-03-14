import React, { useState } from 'react';
import EmailValidator from 'email-validator';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as SnackBar from '../../../services/snackBar';
import LeftImage from '../../../assets/svg/left_auth.svg';
import TextInput from '../../../components/TextInput/TextInput';
import { authenticate } from '../../../redux/actions/authActions';

import * as S from './Login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlerSubmit = () => {
    const isValidEmail = EmailValidator.validate(email);
    if (!isValidEmail) {
      return SnackBar.message('E-mail inválido');
    }
    if (password.trim() === '') {
      return SnackBar.message('Senha inválida');
    }

    dispatch(
      authenticate({ email, password }, (err) => {
        if (err) {
          SnackBar.message('Usuário/Senha inválidos');
        } else {
          navigation.reset({ index: 0, routes: [{ name: 'Content' }] });
        }
      })
    );
  };

  return (
    <>
      <S.Container>
        <S.ImageLeft>
          <LeftImage />
        </S.ImageLeft>
        <S.WrapperTitle>
          <S.Title>Seja bem vindo!</S.Title>
        </S.WrapperTitle>
        <S.WrapperFields>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            width={0.75}
            onChangeText={(val) => setEmail(val)}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            width={0.75}
            onChangeText={(val) => setPassword(val)}
            value={password}
            password
          />
        </S.WrapperFields>
        <S.RowSubmit>
          <S.WrapperRegister onPress={() => navigation.navigate('register')}>
            <S.SubmitText>Não possui conta? Faça agora!</S.SubmitText>
          </S.WrapperRegister>
          <S.CircleCheck onPress={handlerSubmit}>
            <S.ArrowIcon />
          </S.CircleCheck>
        </S.RowSubmit>
      </S.Container>
    </>
  );
};

export default Login;
