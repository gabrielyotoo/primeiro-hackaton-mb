import React from 'react';

import * as S from './HeaderComponent.style';

const HeaderComponent = ({ title }) => (
  <S.Container>
    <S.Title>{title}</S.Title>
  </S.Container>
);

export default HeaderComponent;
