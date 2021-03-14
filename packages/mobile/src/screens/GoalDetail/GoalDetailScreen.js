import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { colors } from '../../theme/index.json';
import * as SnackBar from '../../services/snackBar';
import Comment from '../../components/Comment/CommentComponent';
import { getGoalDetails } from '../../redux/actions/goalActions';
import PostComment from '../../components/PostComment';

import * as S from './GoalDetailScreen.style';

const GoalTop = ({ title, description, id }) => (
  <>
    <S.WrapperTarget>
      <S.Title>{title ?? ''}</S.Title>
      <S.Text>{description ?? ''}</S.Text>
    </S.WrapperTarget>
    <PostComment goalId={id} />
  </>
);

const GoalDetailScreen = () => {
  const { params } = useRoute();
  const { comments, progress, title, description } = useSelector(
    (state) => state.goals.details
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getGoalDetails(params.id, (err) => {
        if (err) {
          SnackBar.message(err);
        }
      })
    );
  }, [dispatch, params.id]);

  return (
    <S.Screen>
      <StatusBar backgroundColor={colors.primaryColor} />
      {comments && comments.length > 0 && (
        <S.TargetGoFlatList
          data={comments}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => (
            <GoalTop
              title={title}
              description={description}
              progress={progress}
              id={params.id}
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
      )}
    </S.Screen>
  );
};

export default GoalDetailScreen;
