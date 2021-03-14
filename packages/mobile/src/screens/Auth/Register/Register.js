import React, { useState } from 'react';
import * as S from './Register.style';
import EmailValidator from 'email-validator';
import * as SnackBar from '../../../services/snackBar';

import LeftImage from '../../../assets/svg/left_auth.svg';
import TextInput from '../../../components/TextInput/TextInput';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlerSubmit = () => {
    const isValidEmail = EmailValidator.validate(email);
    if (!isValidEmail) {
      return SnackBar.message('E-mail inválido');
    }
    if (name.trim() === '' || name.length < 2) {
      return SnackBar.message('Nome inválido');
    }
    if (password.trim() === '' || password.length < 6) {
      return SnackBar.message('Senha inválido');
    }
    if (password !== confirmPassword) {
      return SnackBar.message('Senhas diferentes! Verifique-as');
    }
  };

  return (
    <>
      <S.Container>
        <S.ImageLeft>
          <LeftImage />
        </S.ImageLeft>
        <S.WrapperTitle>
          <S.Title>Cadastro</S.Title>
        </S.WrapperTitle>
        <S.WrapperFields>
          <TextInput
            label="Nome"
            placeholder="Digite seu nome"
            width={0.75}
            onChangeText={(val) => setName(val)}
            value={name}
          />
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
          <TextInput
            label="Confirme sua senha"
            placeholder="Digite sua senha"
            width={0.75}
            onChangeText={(val) => setConfirmPassword(val)}
            value={confirmPassword}
            password
          />
        </S.WrapperFields>
        <S.RowSubmit>
          <S.WrapperRegister onPress={() => navigation.replace('login')}>
            <S.SubmitText>Já tenho uma conta</S.SubmitText>
          </S.WrapperRegister>
          <S.CircleCheck onPress={handlerSubmit}>
            <S.ArrowIcon />
          </S.CircleCheck>
        </S.RowSubmit>
      </S.Container>
    </>
  );
};

export default Register;
