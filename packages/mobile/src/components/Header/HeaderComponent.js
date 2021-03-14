import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../../theme/index.json';

import * as S from './HeaderComponent.style';

const HeaderComponent = ({ title }) => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <TouchableWithoutFeedback onPress={navigation.goBack}>
        <S.BackButton>
          <Ionicons name="arrow-back" color={colors.primaryText} size={25} />
        </S.BackButton>
      </TouchableWithoutFeedback>
    </S.Container>
  );
};

export default HeaderComponent;
