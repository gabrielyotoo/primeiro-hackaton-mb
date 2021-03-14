import styled from 'styled-components/native';

import * as Window from '../../utils/dimensions';
import { colors, fonts } from '../../theme/index.json';

export const Container = styled.View`
  margin-top: ${(props) => (props.link ? 0 : Window.heightScale(0.005))}px;
  margin-bottom: ${(props) => (props.link ? Window.heightScale(0.01) : 0)}px;
  background-color: ${colors.primaryColor};
  opacity: 0.75;
  border-top-right-radius: ${(props) =>
    props.link ? 0 : Window.heightScale(0.02)}px;
  border-top-left-radius: ${(props) =>
    props.link ? 0 : Window.heightScale(0.02)}px;
  border-bottom-right-radius: ${(props) =>
    !props.link && props.willSendLink ? 0 : Window.heightScale(0.02)}px;
  border-bottom-left-radius: ${(props) =>
    !props.link && props.willSendLink ? 0 : Window.heightScale(0.02)}px;
  background-color: ${colors.primaryColor};
  elevation: 5;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${colors.primaryText};
  padding-left: ${Window.heightScale(0.025)}px;
  font-size: ${Window.fontScale(fonts.sizes.text)}px;
  font-family: ${fonts.regular};
`;

export const Input = styled.TextInput.attrs((props) => ({
  multiline: !props.link,
  placeholderTextColor: colors.primaryText,
}))`
  color: ${colors.primaryText};
  width: 75%;
  font-size: ${Window.fontScale(fonts.sizes.text)}px;
  font-family: ${fonts.regular};
  padding-horizontal: ${(props) =>
    props.link ? Window.heightScale(0.008) : Window.heightScale(0.025)}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
`;
