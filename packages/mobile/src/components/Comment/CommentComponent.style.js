import styled from 'styled-components';

import * as Window from '../../utils/dimensions';
import { colors, fonts } from '../../theme/index.json';

export const Comments = styled.Text`
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.h1}px;
  font-family: ${fonts.medium};
`;

export const WrapperComments = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  margin-vertical: ${Window.heightScale(0.01)}px;
  background-color: ${colors.primaryColor};
  opacity: 0.75;
  padding: ${Window.heightScale(0.025)}px;
  border-radius: ${Window.heightScale(0.02)}px;
  elevation: 5;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextsContainer = styled.View``;

export const CommentsName = styled.Text`
  color: ${colors.primaryText};
  font-size: ${({ bold }) =>
    bold ? `${Window.fontScale(15)}px` : `${Window.fontScale(14)}px`};
  font-family: ${({ bold }) => (bold ? fonts.bold : fonts.regular)};
  margin-bottom: ${Window.heightScale(0.01)}px;
`;

export const CommentsText = styled.Text`
  color: ${colors.primaryText};
  font-size: ${`${Window.fontScale(14)}px`};
  font-family: ${fonts.medium};
`;
