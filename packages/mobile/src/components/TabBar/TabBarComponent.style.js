import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as Window from '../../utils/dimensions';
import { colors } from '../../theme/index.json';

export const TabBarContainer = styled.View`
  min-height: ${Window.heightScale(0.08)}px;
  width: 100%;
  background-color: ${colors.primaryColor};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  elevation: 3;
  z-index: 0;
`;

export const Button = styled.View``;

export const BassoButtonContainer = styled.View`
  position: absolute;
  top: auto;
  bottom: ${Window.heightScale(0.03)}px;
  left: 50%;
`;

export const BassoButton = styled.View`
  position: relative;
  border-radius: 500px;
  background-color: ${colors.secoundColor};
  elevation: 2;
  padding: ${Window.widthScale(0.015)}px;
  left: -50%;
`;

export const PlusIcon = styled(Ionicons)`
  margin: 0 0 0 ${Window.widthScale(0.008)}px;
`;
