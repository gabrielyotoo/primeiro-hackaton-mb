import styled from 'styled-components';

import * as Window from '../../utils/dimensions';
import { colors, fonts } from '../../theme/index.json';

export const Container = styled.View`
  padding: ${Window.heightScale(0.03)}px 0 0;
  background-color: ${colors.primaryColor};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  padding: ${Window.heightScale(0.03)}px;
  color: ${colors.primaryText};
  text-align: center;
  font-size: ${Window.fontScale(fonts.sizes.header)}px;
  font-family: ${Window.fontScale(fonts.bold)}px;
`;
