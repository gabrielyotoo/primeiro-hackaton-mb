import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { colors } from '../../theme/index.json';
import * as SnackBar from '../../services/snackBar';
import Comment from '../../components/Comment/CommentComponent';
import { getGoalDetails } from '../../redux/actions/goalActions';

import * as S from './GoalDetailScreen.style';

const GoalTop = ({ title, description }) => (
  <>
    <S.WrapperTarget>
      <S.Title>{title ?? ''}</S.Title>
      <S.Text>{description ?? ''}</S.Text>
    </S.WrapperTarget>
  </>
);

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
    link: 'https://google.com',
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

const GoalDetailScreen = () => {
  const { params } = useRoute();
  const { comments, progress, title, description } = useSelector(
    (state) => state.goals
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     getGoalDetails(params.id, (err) => {
  //       if (err) {
  //         SnackBar.message(err);
  //       }
  //     })
  //   );
  // });

  return (
    <S.Screen>
      <StatusBar backgroundColor={colors.primaryColor} />
      <S.TargetGoFlatList
        data={mockComments}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <GoalTop
            title={title}
            description={description}
            progress={progress}
          />
        )}
        renderItem={({ item }) => (
          <Comment
            comment={item.comment}
            id={item.id}
            link={item.link ?? undefined}
            user={item.User}
          />
        )}
        ListFooterComponent={() => <S.Footer />}
      />
    </S.Screen>
  );
};

export default GoalDetailScreen;
