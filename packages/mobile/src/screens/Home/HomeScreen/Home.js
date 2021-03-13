import React from 'react';

import TargetGo from '../../../components/TargetGo/TargetGo';

import * as S from './Home.style';

const mock = [
  {
    id: 1,
    title: 'Efetivo',
    checked: true,
  },
  {
    id: 2,
    title: 'Efetivo',
    checked: true,
  },
  {
    id: 3,
    title: 'Efetivo',
    checked: false,
  },
  {
    id: 4,
    title: 'Lucas araujooo',
    checked: true,
  },
  {
    id: 5,
    title: 'Efetivo',
    checked: true,
  },
  {
    id: 5,
    title: 'Efetivo',
    checked: true,
  },
  {
    id: 5,
    title: 'Efetivo',
    checked: true,
  },
  {
    id: 5,
    title: 'Efetivo',
    checked: true,
  },
];

const HomeScreen = () => (
  <>
    <S.Container>
      <S.WrapperMe>
        <S.TextMe>Daleeeee,</S.TextMe>
        <S.TextMe bold>Lucas Araujo!</S.TextMe>
      </S.WrapperMe>
      <S.WrapperTarget>
        <S.TargetText>Metas</S.TargetText>
        <S.TargetsFlatList />
      </S.WrapperTarget>
      <S.WrapperTarget>
        <S.TargetText>Metas de Hoje</S.TargetText>
        <S.TargetGoFlatList
          data={mock}
          keyExtractor={(targetGo) => toString(targetGo.id)}
          renderItem={({ item }) => (
            <TargetGo title={item.title} checked={item.checked} />
          )}
        />
      </S.WrapperTarget>
    </S.Container>
  </>
);

export default HomeScreen;
