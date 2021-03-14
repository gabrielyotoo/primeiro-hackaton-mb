import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProgressBar from '../ProgressBar';

import * as S from './TargetComponent.style';

const TargetComponent = ({ title, goals, progress, id }) => {
  const navigation = useNavigation();
  const openTargetDetail = () => {
    navigation.navigate('targetDetail');
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={openTargetDetail}>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.TextContainer>
          <S.Text>{goals} Metas</S.Text>
          <S.Text>{(progress * 100).toFixed(2).replace('.', ',')}%</S.Text>
        </S.TextContainer>
        <ProgressBar progress={progress * 100} />
      </S.Container>
    </TouchableOpacity>
  );
};

export default TargetComponent;
