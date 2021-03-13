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
  color: ${theme.colors.secondaryText};
  font-size: ${theme.fonts.sizes.h1}px;
  font-family: ${theme.fonts.medium};
`;

export const TextContainer = styled.View`
  margin-top: ${Window.heightScale(0.02)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: ${theme.colors.secondaryText};
  font-size: ${theme.fonts.sizes.text}px;
  font-family: ${theme.fonts.medium};
`;
