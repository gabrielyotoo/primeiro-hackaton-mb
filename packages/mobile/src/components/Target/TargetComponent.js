import React from 'react';

import * as S from './TargetComponent.style';

const TargetComponent = ({ title, goals, progress }) => (
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
);

export default TargetComponent;
