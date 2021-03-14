import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';

import * as Window from '../../utils/dimensions';
import theme from '../../theme/index.json';

export const Container = styled.View`
  padding: ${`${Window.widthScale(0.05)}px`};
  background-color: ${theme.colors.primaryColor};
  flex-direction: row;
  border-radius: ${`${Window.widthScale(1)}px`};
  margin-vertical: ${`${Window.heightScale(0.01)}px`};
  elevation: 5;
  shadow-radius: ${`${Window.widthScale(0.06)}px`};
  align-items: center;
`;

export const WrapperIcon = styled.TouchableOpacity`
  padding-right: ${`${Window.widthScale(0.06)}px`};
  padding-left: ${`${Window.widthScale(0.03)}px`};
`;

export const CircleCheck = styled.View`
  width: ${`${Window.widthScale(0.08)}px`};
  height: ${`${Window.widthScale(0.08)}px`};
  border: ${`${Window.widthScale(0.005)}px`};
  border-color: ${theme.colors.secoundColor};
  border-radius: ${`${Window.widthScale(0.06)}px`};
  justify-content: center;
  align-items: center;
`;

export const TextTarget = styled.Text`
  font-family: ${theme.fonts.semiBold};
  font-size: ${`${Window.fontScale(15)}px`};
  color: ${theme.colors.primaryText};
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`;

export const Checked = styled(Icon).attrs({
  name: 'check',
  color: theme.colors.secoundColor,
  size: 28,
})``;
