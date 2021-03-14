import React from 'react';

import * as S from './TargetGo.style';

// import { Container } from './styles';

const TargetGo = ({ title, checked, onPress }) => (
  <S.Container>
    <S.WrapperIcon onPress={onPress}>
      {checked ? (
        <S.CircleCheck>
          <S.Checked />
        </S.CircleCheck>
      ) : (
        <S.CircleCheck />
      )}
    </S.WrapperIcon>
    <S.TextTarget checked={checked}>{title}</S.TextTarget>
  </S.Container>
);

export default TargetGo;
