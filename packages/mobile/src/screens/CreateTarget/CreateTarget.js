import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import TextInput from '../../components/TextInput/TextInput';
import * as SnackBar from '../../services/snackBar';
import TargetGo from '../../components/TargetGo/TargetGo';
import { colors } from '../../theme/index.json';
import {
  formatNumbersToDate,
  formatToISODate,
  onlyDigits,
} from '../../utils/string';
import { addTarget } from '../../redux/actions/targetActions';

import * as S from './CreateTarget.style';

const CreateTarget = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [changeToGoals, setChangeToGoals] = useState(false);
  const [titleGoals, setTitleGoals] = useState('');
  const [descriptionGoals, setDescriptionGoals] = useState('');
  const [dueDateGoals, setDueDateGoals] = useState('');
  const [goals, setGoals] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const createTarget = () => {
    if (title.trim() === '' || description.trim() === '' || dueDate === '') {
      return SnackBar.message('Insira os campos corretamente');
    }
    setChangeToGoals(!changeToGoals);
  };

  const addToGoals = () => {
    const newGoal = {
      title: titleGoals,
      description: descriptionGoals,
      dueDate: formatToISODate(dueDate),
    };

    setGoals((_goals) => _goals.concat(newGoal));
    setDescriptionGoals('');
    setTitleGoals('');
    setDueDateGoals('');
  };

  const handleAddTarget = () => {
    dispatch(
      addTarget(
        {
          title,
          description,
          dueDate: formatToISODate(dueDate),
          goals,
        },
        (err) => {
          if (err) {
            SnackBar.message(err ?? '');
          } else {
            navigation.reset({ index: 0, routes: [{ name: 'home' }] });
          }
        }
      )
    );
  };

  return (
    <S.Container>
      <StatusBar backgroundColor={colors.primaryColor} />
      {!changeToGoals ? (
        <>
          <S.WrapperFields>
            <TextInput
              label="Título"
              value={title}
              onChangeText={setTitle}
              width={0.8}
            />
            <TextInput
              label="Descrição"
              value={description}
              onChangeText={setDescription}
              width={0.8}
            />
            <TextInput
              label="Até quando?"
              value={dueDate}
              onChangeText={(text) =>
                setDueDate(formatNumbersToDate(onlyDigits(text)))
              }
              width={0.8}
              keyboardType="number-pad"
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
              width={0.8}
            />
            <TextInput
              label="Descrição"
              value={descriptionGoals}
              onChangeText={setDescriptionGoals}
              width={0.8}
            />
            <TextInput
              label="Até quando?"
              value={dueDateGoals}
              onChangeText={(text) =>
                setDueDateGoals(formatNumbersToDate(onlyDigits(text)))
              }
              width={0.8}
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
            ListHeaderComponent={() => <></>}
            ListFooterComponent={() =>
              goals.length > 0 && (
                <>
                  <S.WrapperButton onPress={handleAddTarget}>
                    <S.TitleButton>Finalizar</S.TitleButton>
                  </S.WrapperButton>
                </>
              )
            }
          />
        </>
      )}
    </S.Container>
  );
};

export default CreateTarget;
