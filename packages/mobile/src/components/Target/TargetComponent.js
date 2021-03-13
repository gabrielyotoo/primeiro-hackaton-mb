import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './TargetComponent.style';

const TargetComponent = ({ title, goals, progress, id }) => {
  const navigation = useNavigation();
  const openTargetDetail = () => {
    navigation.navigate('targetDetail');
  };

  return (
    <TouchableOpacity onPress={openTargetDetail}>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.TextContainer>
          <S.Text>{goals} Metas</S.Text>
          <S.Text>{progress}%</S.Text>
        </S.TextContainer>
        <S.ProgressContainer>
          <S.Progress progress={progress} />
        </S.ProgressContainer>
      </S.Container>
    </TouchableOpacity>
  );
};

export default TargetComponent;
