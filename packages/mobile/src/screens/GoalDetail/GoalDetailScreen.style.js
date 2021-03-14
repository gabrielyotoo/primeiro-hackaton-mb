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

export const Footer = styled.View`
  margin-bottom: ${Window.heightScale(0.05)}px;
  margin-top: ${Window.heightScale(0.03)}px;
`;

export const WrapperTarget = styled.View`
  padding-vertical: ${`${Window.heightScale(0.025)}px`};
  flex-direction: column;
`;

export const Title = styled.Text`
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.title}px;
  font-family: ${fonts.bold};
`;

export const Text = styled.Text`
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.text}px;
  font-family: ${fonts.medium};
  margin-top: ${Window.heightScale(0.005)}px;
`;
