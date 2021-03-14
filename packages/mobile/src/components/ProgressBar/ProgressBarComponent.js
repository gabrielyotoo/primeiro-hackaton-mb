import React from 'react';

import * as S from './ProgressBarComponent.styles';

const ProgressBarComponent = ({ progress, fillColor }) => (
  <S.ProgressContainer>
    <S.Progress fillColor={fillColor} progress={progress} />
  </S.ProgressContainer>
);

export default ProgressBarComponent;
