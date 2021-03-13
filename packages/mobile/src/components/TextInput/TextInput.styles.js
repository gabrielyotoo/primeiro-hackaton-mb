import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

import * as Window from '../../utils/dimensions';
import theme from '../../theme/index.json';

export const InputText = styled(TextInput).attrs({
  theme: {
    colors: {
      primary: theme.colors.primaryText,
      placeholder: theme.colors.primaryText,
    },
    fonts: {
      regular: {
        fontFamily: theme.fonts.medium
      }
    }
  },
})`
  background-color: transparent;
  color: ${theme.colors.primaryText};
  height: ${`${Window.heightScale(0.12)}px`};
  width: ${({ width }) => (width ? `${Window.widthScale(width)}px` : `${Window.widthScale(1)}px`)};
  margin-vertical: 2%;
`;