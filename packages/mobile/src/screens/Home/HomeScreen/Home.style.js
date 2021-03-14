import styled from 'styled-components/native';

import * as Window from '../../../utils/dimensions';
import theme from '../../../theme/index.json';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.secoundColor};
`;

export const WrapperMe = styled.View`
  padding-top: ${`${Window.heightScale(0.05)}px`};
  justify-content: center;
  padding-horizontal: ${`${Window.widthScale(0.05)}px`};
`;

export const TextMe = styled.Text`
  font-family: ${({ bold }) => (bold ? theme.fonts.bold : theme.fonts.regular)};
  font-size: ${({ bold }) =>
    bold ? `${Window.fontScale(24)}px` : `${Window.fontScale(20)}px`};
  color: ${theme.colors.primaryText};
`;

export const WrapperTarget = styled.View`
  padding-horizontal: ${`${Window.widthScale(0.05)}px`};
  flex-direction: column;
`;

export const TargetContainer = styled.View`
  padding-top: ${`${Window.heightScale(0.05)}px`};
  flex-direction: column;
`;

export const TargetText = styled.Text`
  margin-horizontal: ${`${Window.widthScale(0.05)}px`};
  color: ${theme.colors.primaryText};
  font-family: ${theme.fonts.medium};
  font-size: ${`${Window.fontScale(26)}px`};
`;

export const GoalText = styled.Text`
  color: ${theme.colors.primaryText};
  font-family: ${theme.fonts.medium};
  font-size: ${`${Window.fontScale(26)}px`};
  padding-horizontal: ${`${Window.widthScale(0.05)}px`};
  margin-top: ${Window.heightScale(0.05)}px;
`;

export const TargetsFlatList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  horizontal: true,
  bounces: false,
  alwaysBounceHorizontal: false,
})``;

export const Header = styled.View`
  margin-right: ${Window.widthScale(0.05)}px;
`;

export const Empty = styled.Text`
  margin-top: ${Window.heightScale(0.01)}px;
  font-size: ${Window.fontScale(theme.fonts.sizes.header)}px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.primaryColorLight};
`;

export const Separator = styled.View`
  margin-right: ${Window.widthScale(0.05)}px;
`;

export const Footer = styled.View`
  margin-right: ${Window.widthScale(0.05)}px;
`;

export const TargetGoFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})`
  padding-top: ${`${Window.heightScale(0.02)}px`};
  height: 100%;
`;

export const VerticalFooter = styled.View`
  margin-bottom: ${Window.heightScale(0.05)}px;
`;
