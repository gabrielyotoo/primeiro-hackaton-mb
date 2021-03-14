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

const mockComments = [
  {
    id: 1,
    comment: 'Usa o aaaaaaaaaa',
    User: {
      name: 'Lucas Araujo',
    },
  },
  {
    id: 2,
    comment: 'Usa o aaaaaaaaaa',
    User: {
      name: 'Lucas Araujo',
    },
  },
  {
    id: 3,
    comment: 'Usa o aaaaaaaaaa',
    User: {
      name: 'Lucas Araujo',
    },
  },
  {
    id: 4,
    comment: 'Usa o aaaaaaaaaa',
    User: {
      name: 'Lucas Araujo',
    },
  },
  {
    id: 5,
    comment: 'Usa o aaaaaaaaaa',
    User: {
      name: 'Lucas Araujo',
    },
  },
  {
    id: 6,
    comment: 'Usa o aaaaaaaaaa',
    User: {
      name: 'Lucas Araujo',
    },
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

const TargetComments = () => (
  <>
    <S.Footer>
      <S.Comments>Comentários:</S.Comments>
      {mockComments.map((item) => (
        <>
          <S.WrapperComments key={item.id}>
            <S.CommentsName bold>{item.User.name} comentou:</S.CommentsName>
            <S.CommentsName>{item.comment}</S.CommentsName>
          </S.WrapperComments>
        </>
      ))}
    </S.Footer>
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
      ListFooterComponent={() => <TargetComments />}
    />
  </S.Screen>
);

export default TargetDetailScreen;
