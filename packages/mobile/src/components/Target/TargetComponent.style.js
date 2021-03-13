import styled from 'styled-components/native';

import * as Window from '../../utils/dimensions';
import theme from '../../theme/index.json';

export const Container = styled.View`
  margin-top: ${Window.heightScale(0.02)}px;
  padding: ${Window.widthScale(0.05)}px;
  min-width: ${Window.widthScale(0.6)}px;
  background-color: ${theme.colors.primaryColor};
  border-radius: 15px;
  elevation: 3;
`;

export const Title = styled.Text`
  color: ${theme.colors.primaryText};
  font-size: ${theme.fonts.sizes.title}px;
`;

export const TextContainer = styled.View`
  margin-top: ${Window.heightScale(0.02)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${theme.colors.secondaryText};
  font-size: ${theme.fonts.sizes.text}px;
`;

export const ProgressContainer = styled.View`
  margin-top: ${Window.heightScale(0.005)}px;
  width: 100%;
  background-color: ${theme.colors.primaryColorLight};
  border-radius: 5px;
`;

export const Progress = styled.View`
  padding: ${Window.heightScale(0.006)}px;
  border-radius: 5px;
  width: ${(props) => props.progress}%
  background-color: ${theme.colors.secoundColor};
`;
