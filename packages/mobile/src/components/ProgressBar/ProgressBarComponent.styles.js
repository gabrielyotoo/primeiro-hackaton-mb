import styled from 'styled-components/native';

import * as Window from '../../utils/dimensions';
import theme from '../../theme/index.json';

export const ProgressContainer = styled.View`
  margin-top: ${Window.heightScale(0.005)}px;
  width: 100%;
  background-color: ${theme.colors.primaryColorLight};
  border-radius: 5px;
`;

export const Progress = styled.View`
  padding-vertical: ${Window.heightScale(0.006)}px;
  border-radius: 5px;
  width: ${(props) => props.progress}%
  background-color: ${({ fillColor }) =>
    fillColor ?? theme.colors.secoundColor};
`;
