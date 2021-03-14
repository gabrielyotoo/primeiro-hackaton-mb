import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TargetGo from '../../../components/TargetGo/TargetGo';
import TargetComponent from '../../../components/Target';
import { getTargets } from '../../../redux/actions/targetActions';
import { getGoals, updateGoal } from '../../../redux/actions/goalActions';

import * as S from './Home.style';

const HomeTop = ({ name, targets }) => (
  <>
    <S.WrapperMe>
      <S.TextMe>Daleeeee,</S.TextMe>
      <S.TextMe bold>{name ?? ''}</S.TextMe>
    </S.WrapperMe>
    <S.TargetContainer>
      <S.TargetText>Metas</S.TargetText>
      <S.TargetsFlatList
        data={targets}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <S.Header />}
        renderItem={({ item }) => (
          <TargetComponent
            title={item.title}
            goals={item.goals}
            progress={item.progress}
          />
        )}
        ListEmptyComponent={() => (
          <S.Empty>Nenhuma meta cadastrada ainda</S.Empty>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
        ListFooterComponent={() => <S.Footer />}
      />
    </S.TargetContainer>
    <S.GoalText>Metas de Hoje</S.GoalText>
  </>
);

const HomeScreen = () => {
  const { goals } = useSelector((state) => state.goals);
  const { name } = useSelector((state) => state.session.loggedUser);
  const { targets } = useSelector((state) => state.targets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTargets());
    dispatch(getGoals());
  }, [dispatch]);

  const handlePress = (id) => {
    dispatch(updateGoal(id));
  };

  return (
    <>
      <S.Container>
        <S.TargetGoFlatList
          data={goals}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => <HomeTop name={name} targets={targets} />}
          renderItem={({ item }) => (
            <S.WrapperTarget>
              <TargetGo
                title={item.title}
                checked={item.done}
                onPress={() => handlePress(item.id)}
              />
            </S.WrapperTarget>
          )}
          ListEmptyComponent={() => (
            <S.GoalEmpty>Nenhuma atividade cadastrada ainda</S.GoalEmpty>
          )}
          ListFooterComponent={() => <S.VerticalFooter />}
        />
      </S.Container>
    </>
  );
};

export default HomeScreen;
