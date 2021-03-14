import React from 'react';

import TargetGo from '../../../components/TargetGo/TargetGo';
import TargetComponent from '../../../components/Target';

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

const HomeTop = () => (
  <>
    <S.WrapperMe>
      <S.WrapperMeFields>
        <S.TextMe>Daleeeee,</S.TextMe>
        <S.TextMe bold>Lucas Araujo!</S.TextMe>
      </S.WrapperMeFields>
      <S.WrapperNotification>
        <S.NotificationIcon />
      </S.WrapperNotification>
    </S.WrapperMe>
    <S.TargetContainer>
      <S.TargetText>Metas</S.TargetText>
      <S.TargetsFlatList
        data={[
          {
            title: 'dsafdsa',
            goals: 5,
            progress: 20,
          },
          {
            title: 'aaaa',
            goals: 5,
            progress: 100,
          },
          {
            title: '00333',
            goals: 5,
            progress: 80,
          },
        ]}
        keyExtractor={({ title }) => title}
        ListHeaderComponent={() => <S.Header />}
        renderItem={({ item }) => (
          <TargetComponent
            title={item.title}
            goals={item.goals}
            progress={item.progress}
          />
        )}
        ItemSeparatorComponent={() => <S.Separator />}
        ListFooterComponent={() => <S.Footer />}
      />
    </S.TargetContainer>
    <S.GoalText>Metas de Hoje</S.GoalText>
  </>
);

const HomeScreen = () => (
  <>
    <S.Container>
      <S.TargetGoFlatList
        data={mock}
        keyExtractor={(targetGo, index) => index.toString()}
        ListHeaderComponent={() => <HomeTop />}
        renderItem={({ item }) => (
          <S.WrapperTarget>
            <TargetGo title={item.title} checked={item.checked} />
          </S.WrapperTarget>
        )}
        ListFooterComponent={() => <S.VerticalFooter />}
      />
    </S.Container>
  </>
);

export default HomeScreen;
