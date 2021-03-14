import React, { useState } from 'react';
import moment from 'moment-timezone';

import TextInput from '../../components/TextInput/TextInput';
import * as SnackBar from '../../services/snackBar';
import TargetGo from '../../components/TargetGo/TargetGo';

import * as S from './CreateTarget.style';

const CreateTarget = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [changeToGoals, setChangeToGoals] = useState(false);
  const [titleGoals, setTitleGoals] = useState('');
  const [descriptionGoals, setDescriptionGoals] = useState('');
  const [goals, setGoals] = useState([]);

  const createTarget = () => {
    if (title.trim() === '' || description.trim() === '') {
      return SnackBar.message('Insira os campos corretamente');
    }
    setChangeToGoals(!changeToGoals);
  };

  const addToGoals = () => {
    const newGoal = {
      title: titleGoals,
      description: descriptionGoals,
      dueDate: moment().format('YYYY-MM-DD'),
    };

    setGoals((_goals) => _goals.concat(newGoal));
    setDescriptionGoals('');
    setTitleGoals('');
  };

  return (
    <S.Container>
      {!changeToGoals ? (
        <>
          <S.WrapperFields>
            <TextInput
              label="Título"
              value={title}
              onChangeText={setTitle}
              width={0.75}
            />
            <TextInput
              label="Descrição"
              value={description}
              onChangeText={setDescription}
              width={0.75}
            />
          </S.WrapperFields>
          <S.WrapperButton onPress={createTarget}>
            <S.TitleButton>Criar</S.TitleButton>
          </S.WrapperButton>
        </>
      ) : (
        <>
          <S.TitleGoals>Agora vamos criar os goals para {title}</S.TitleGoals>
          <S.WrapperFields goals>
            <TextInput
              label="Título"
              value={titleGoals}
              onChangeText={setTitleGoals}
              width={0.75}
            />
            <TextInput
              label="Descrição"
              value={descriptionGoals}
              onChangeText={setDescriptionGoals}
              width={0.75}
            />
          </S.WrapperFields>
          <S.WrapperButton onPress={addToGoals}>
            <S.TitleButton>Adicionar</S.TitleButton>
          </S.WrapperButton>
          <S.GoalsFlatList
            data={goals}
            extraData={goals}
            renderItem={({ item }) => (
              <>
                <S.WrapperGoals>
                  <TargetGo title={item.title} />
                </S.WrapperGoals>
              </>
            )}
            ListHeaderComponent={() => <S.GoalsTopComponent />}
            ListFooterComponent={() => <S.GoalsBottomComponent />}
          />
        </>
      )}
    </S.Container>
  );
};

export default CreateTarget;
