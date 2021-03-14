import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment-timezone';

import TargetGo from '../../../components/TargetGo/TargetGo';
import { updateGoal, getWeekGoals } from '../../../redux/actions/goalActions';
import * as SnackBar from '../../../services/snackBar';
import { getDayOfWeek } from '../../../utils/string';

import * as S from './WeekScreen.style';

const WeekScreen = () => {
  const [sections, setSections] = useState([]);
  const [date, setDate] = useState(moment());
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { weekGoals } = useSelector((state) => state.week);

  useEffect(() => {
    dispatch(
      getWeekGoals(moment().format('YYYY-MM-DD'), (err) => {
        if (err) {
          SnackBar.message(err);
        }
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (!weekGoals) return;
    const newSections = [...sections];
    weekGoals.forEach((goal) => {
      const foundIndex = newSections.findIndex(
        (section) =>
          getDayOfWeek(moment(goal.dueDate).isoWeekday()) === section.day
      );
      if (foundIndex === -1) {
        newSections.push({
          day: getDayOfWeek(moment(goal.dueDate).isoWeekday()),
          data: [goal],
        });
      } else {
        newSections[parseInt(foundIndex.toString(), 10)].data = [
          ...newSections[parseInt(foundIndex.toString(), 10)].data,
          goal,
        ];
      }
    });
    setSections(newSections);
  }, [weekGoals]);

  const loadMore = () => {
    dispatch(
      getWeekGoals(date.add(1, 'day').format('YYYY-MM-DD'), (err) => {
        if (err) {
          SnackBar.message(err);
        }
      })
    );
  };

  const handlePress = (id, done) => {
    dispatch(
      updateGoal({ id, done }, (err) => {
        if (err) {
          SnackBar.message(err);
        }
      })
    );
  };

  const openGoalDetail = (id) => {
    navigation.navigate('goalDetail', { id });
  };

  return (
    <S.Screen>
      <S.List
        sections={sections}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        ListHeaderComponent={() => <S.Title>Suas atividades da semana</S.Title>}
        renderSectionHeader={({ section }) => (
          <S.SectionTitle>{section.day}</S.SectionTitle>
        )}
        renderItem={({ item }) => (
          <S.WrapperTarget>
            <TouchableOpacity onPress={() => openGoalDetail(item.id)}>
              <TargetGo
                title={item.title}
                checked={item.done}
                onPress={() => handlePress(item.id, !item.done)}
              />
            </TouchableOpacity>
          </S.WrapperTarget>
        )}
        ListFooterComponent={() => (
          <S.Footer>
            <S.FooterBullet>&#x2022;</S.FooterBullet>
            <S.FooterText>Sem mais atividades para esta semana :D</S.FooterText>
          </S.Footer>
        )}
      />
    </S.Screen>
  );
};

export default WeekScreen;
