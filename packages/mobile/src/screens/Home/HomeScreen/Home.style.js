import styled from 'styled-components/native';

import * as Window from '../../../utils/dimensions';
import theme from '../../../theme/index.json';

export const Container = styled.View`
  flex: 1;
  /* padding-horizontal: ${`${Window.widthScale(0.1)}px`}; */
  background-color: ${theme.colors.secoundColor};
`;

export const WrapperMe = styled.View`
  padding-top: ${`${Window.heightScale(0.1)}px`};
  justify-content: center;
  padding-horizontal: ${`${Window.widthScale(0.1)}px`};
`;

export const TextMe = styled.Text`
  font-family: ${({ bold }) => (bold ? theme.fonts.bold : theme.fonts.regular)};
  font-size: ${({ bold }) =>
    bold ? `${Window.fontScale(24)}px` : `${Window.fontScale(20)}px`};
  color: ${theme.colors.primaryColor};
`;

export const WrapperTarget = styled.View`
  padding-top: ${`${Window.heightScale(0.05)}px`};
  flex-direction: column;
  padding-horizontal: ${`${Window.widthScale(0.1)}px`};
`;

export const TargetText = styled.Text`
  color: ${theme.colors.primaryColor};
  font-family: ${theme.fonts.medium};
  font-size: ${`${Window.fontScale(26)}px`};
`;

export const TargetsFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  horizontal: true,
})``;

export const TargetGoFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
})`
  padding-top: ${`${Window.heightScale(0.02)}px`};
  height: 100%;
`;
