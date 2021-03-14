import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

import * as Window from '../../utils/dimensions';
import theme from '../../theme/index.json';

export const Container = styled.View`
  position: relative;
  justify-content: center;
  margin-vertical: ${`${Window.heightScale(0.01)}px`};
  width: ${({ width }) => (width ? `${Window.widthScale(width)}px` : `${Window.widthScale(1)}px`)};
`;

export const Label = styled.Text`
  font-size:  ${`${Window.fontScale(14)}px`};
  color: ${theme.colors.primaryText};
  font-family: ${theme.fonts.semiBold};
  padding-vertical: ${`${Window.heightScale(0.01)}px`};
`;

export const InputText = styled.TextInput`
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.primaryText};
  background-color: transparent;
  font-size:  ${`${Window.fontScale(14)}px`};
  padding: ${`${Window.widthScale(0.02)}px`} 1%;
  border-width: ${`${Window.widthScale(0.001)}px`};
  border-color: ${theme.colors.primaryText};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;

