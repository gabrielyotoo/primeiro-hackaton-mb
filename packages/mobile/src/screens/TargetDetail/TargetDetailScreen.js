import React from 'react';
import { StatusBar } from 'react-native';

import TargetGo from '../../components/TargetGo/TargetGo';
import { colors } from '../../theme/index.json';
import ProgressBar from '../../components/ProgressBar';

import * as S from './TargetDetailScreen.style';

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

const TargetTop = () => (
  <>
    <S.WrapperTarget>
      <ProgressBar progress={50} fillColor={colors.primaryColor} />
      <S.Title>TESTEEE</S.Title>
      <S.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet
        mi volutpat, interdum dui nec, ullamcorper massa. Phasellus erat risus,
        ornare venenatis auctor cursus, condimentum volutpat urna. Nulla urna
        magna, ullamcorper id blandit sit amet, eleifend quis lorem. Nulla
        varius maximus consequat.
      </S.Text>
    </S.WrapperTarget>
  </>
);

const TargetDetailScreen = () => (
  <S.Screen>
    <StatusBar backgroundColor={colors.primaryColor} />
    <S.TargetGoFlatList
      data={mock}
      keyExtractor={(targetGo, index) => index.toString()}
      ListHeaderComponent={() => <TargetTop />}
      renderItem={({ item }) => (
        <TargetGo title={item.title} checked={item.checked} />
      )}
      ListFooterComponent={() => <S.Footer />}
    />
  </S.Screen>
);

export default TargetDetailScreen;
