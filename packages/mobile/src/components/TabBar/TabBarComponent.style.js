import styled from 'styled-components';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  bottom: ${Window.heightScale(0.025)}px;
  left: 50%;
`;

export const BassoButton = styled.View`
  position: relative;
  border-radius: 500px;
  background-color: ${colors.secoundColor};
  elevation: 8;
  padding: ${Window.widthScale(0.015)}px;
  left: -50%;
`;

export const PlusIcon = styled(AntDesign)`
  padding: ${Window.widthScale(0.01)}px;
`;
