import styled from 'styled-components/native';

import * as Window from '../../utils/dimensions';
import { colors, fonts } from '../../theme/index.json';

export const Screen = styled.View`
  padding-horizontal: 5%;
  flex: 1;
  background-color: ${colors.secoundColor};
`;

export const TargetGoFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  overScrollMode: 'never',
})``;

export const Title = styled.Text`
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.title}px;
  font-family: ${fonts.bold};
  margin-top: ${Window.heightScale(0.05)}px;
`;

export const Text = styled.Text`
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.text}px;
  font-family: ${fonts.medium};
  margin-top: ${Window.heightScale(0.005)}px;
`;

export const WrapperTarget = styled.View`
  padding-vertical: ${`${Window.heightScale(0.05)}px`};
  flex-direction: column;
`;

export const Footer = styled.View`
  margin-bottom: ${Window.heightScale(0.05)}px;
  margin-top: ${Window.heightScale(0.03)}px;
`;

export const Comments = styled.Text`
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.h1}px;
  font-family: ${fonts.medium};
`;

export const WrapperComments = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-vertical: ${Window.heightScale(0.01)}px;
  background-color: ${colors.primaryColor};
  opacity: 0.75;
  padding: ${Window.heightScale(0.025)}px;
  border-radius: ${Window.heightScale(0.02)}px;
  elevation: 5;
`;

export const CommentsName = styled.Text`
  color: ${colors.primaryText};
  font-size: ${({ bold }) =>
    bold ? `${Window.fontScale(15)}px` : `${Window.fontScale(14)}px`};
  font-family: ${({ bold }) => (bold ? fonts.bold : fonts.regular)};
`;

export const CommentsText = styled.Text`
  color: ${colors.primaryText};
  font-size: ${`${Window.fontScale(14)}px`};
  font-family: ${fonts.medium};
`;
