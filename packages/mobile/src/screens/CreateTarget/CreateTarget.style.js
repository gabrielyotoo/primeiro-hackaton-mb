import styled from 'styled-components/native';

import * as Window from '../../utils/dimensions';
import { colors, fonts } from '../../theme/index.json';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryColor};
`;

export const WrapperFields = styled.View`
  margin-horizontal: ${Window.heightScale(0.05)}px;
  margin-top: ${({ goals }) =>
    goals ? `${Window.heightScale(0.02)}px` : `${Window.heightScale(0)}px`};
`;

export const WrapperButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})`
  padding: ${`${Window.widthScale(0.03)}px`};
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondaryColorLight};
  align-self: center;
  border-radius: ${`${Window.widthScale(0.08)}px`};
  width: ${`${Window.widthScale(0.8)}px`};
  elevation: 15;
  margin-top: ${`${Window.heightScale(0.05)}px`};
`;

export const TitleButton = styled.Text`
  font-size: ${`${Window.fontScale(18)}px`};
  font-family: ${fonts.semiBold};
  color: ${colors.primaryText};
`;

export const TitleGoals = styled.Text`
  font-size: ${`${Window.fontScale(18)}px`};
  font-family: ${fonts.semiBold};
  color: ${colors.primaryText};
  text-align: center;
`;

export const GoalsFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  overScrollMode: 'never',
})``;

export const GoalsTopComponent = styled.View`
  margin-top: ${`${Window.heightScale(0.02)}px`};
`;

export const GoalsBottomComponent = styled.View`
  margin-bottom: ${`${Window.heightScale(0.02)}px`};
`;

export const WrapperGoals = styled.View`
  width: ${`${Window.widthScale(0.8)}px`};
  align-self: center;
`;
