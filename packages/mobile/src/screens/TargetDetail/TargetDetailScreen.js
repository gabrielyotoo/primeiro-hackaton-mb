import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import TargetGo from '../../components/TargetGo/TargetGo';
import { colors } from '../../theme/index.json';
import ProgressBar from '../../components/ProgressBar';
import { getTargetDetails } from '../../redux/actions/targetActions';
import * as SnackBar from '../../services/snackBar';

import * as S from './TargetDetailScreen.style';

const TargetTop = ({ title, description, progress }) => (
  <>
    <S.WrapperTarget>
      <ProgressBar progress={progress ?? 0} fillColor={colors.primaryColor} />
      <S.Title>{title ?? ''}</S.Title>
      <S.Text>{description ?? ''}</S.Text>
    </S.WrapperTarget>
  </>
);

const TargetDetailScreen = () => {
  const { params } = useRoute();
  const { details } = useSelector((state) => state.targets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getTargetDetails(params.id, (err) => {
        if (err) {
          SnackBar.message(err);
        }
      })
    );
  }, [dispatch, params.id]);

  return (
    <S.Screen>
      <StatusBar backgroundColor={colors.primaryColor} />
      <S.TargetGoFlatList
        data={details.goals}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => (
          <TargetTop
            title={details.title}
            description={details.description}
            progress={details.progress * 100}
          />
        )}
        renderItem={({ item }) => (
          <TargetGo title={item.title} checked={item.checked} />
        )}
        ListFooterComponent={() => <S.Footer />}
      />
    </S.Screen>
  );
};

export default TargetDetailScreen;
