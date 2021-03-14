import styled from 'styled-components';

import * as Window from '../../utils/dimensions';
import { colors, fonts } from '../../theme/index.json';

export const Container = styled.View`
  margin-top: ${Window.heightScale(0.035)}px;
  min-height: ${Window.heightScale(0.1)}px;
  background-color: ${colors.primaryColor};
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.View`
  color: ${colors.primaryText};
  text-align: center;
  padding-left: 5%;
`;

export const Title = styled.Text`
  position: absolute;
  width: ${Window.widthScale(1)}px;
  color: ${colors.primaryText};
  text-align: center;
  font-size: ${Window.fontScale(fonts.sizes.header)}px;
  font-family: ${fonts.bold};
`;
