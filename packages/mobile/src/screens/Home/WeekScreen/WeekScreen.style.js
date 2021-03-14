import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as Window from '../../../utils/dimensions';
import { colors, fonts } from '../../../theme/index.json';

export const Screen = styled.View`
  padding-top: ${Window.heightScale(0.05)}px;
  flex: 1;
  background-color: ${colors.secoundColor};
`;

export const List = styled.SectionList`
  padding-horizontal: 5%;
`;

export const Title = styled.Text`
  color: ${colors.primaryText};
  font-family: ${fonts.medium};
  font-size: ${`${Window.fontScale(fonts.sizes.title)}px`};
  text-align: center;
  margin-bottom: ${Window.heightScale(0.05)}px;
`;

export const SectionTitle = styled.Text`
  color: ${colors.primaryText};
  font-family: ${fonts.medium};
  font-size: ${`${Window.fontScale(fonts.sizes.h1)}px`};
  margin-vertical: ${Window.heightScale(0.025)}px;
`;

export const WrapperTarget = styled.View`
  flex-direction: column;
`;

export const Footer = styled.View`
  margin-vertical: ${Window.heightScale(0.05)}px;
`;

export const FooterBullet = styled.Text`
  color: ${colors.primaryColorLight};
  font-family: ${fonts.medium};
  font-size: ${`${Window.fontScale(fonts.sizes.title)}px`};
  text-align: center;
  margin-horizontal: 5%;
`;

export const FooterText = styled.Text`
  color: ${colors.primaryColorLight};
  font-family: ${fonts.medium};
  font-size: ${`${Window.fontScale(fonts.sizes.text)}px`};
  text-align: center;
  margin-horizontal: 5%;
`;
