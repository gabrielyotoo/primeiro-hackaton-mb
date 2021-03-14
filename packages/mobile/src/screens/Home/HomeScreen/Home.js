import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TargetGo from '../../../components/TargetGo/TargetGo';
import TargetComponent from '../../../components/Target';
import { getTargets } from '../../../redux/actions/targetActions';
import { getGoals } from '../../../redux/actions/goalActions';

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
        keyExtractor={({ title }) => title}
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
  }, []);

  return (
    <>
      <S.Container>
        <S.TargetGoFlatList
          data={goals}
          keyExtractor={(targetGo) => targetGo.id}
          ListHeaderComponent={() => <HomeTop name={name} targets={targets} />}
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
};

export default HomeScreen;
