import styled from 'styled-components/native';

import * as Window from '../../../utils/dimensions';
import theme from '../../../theme/index.json';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.primaryColor};
`;

export const ImageLeft = styled.View`
  position: absolute;
  height: 100%;
`;

export const WrapperTitle = styled.View`
  padding-horizontal: ${`${Window.widthScale(0.08)}px`};
  padding-top: ${`${Window.heightScale(0.15)}px`};
  padding-bottom: ${`${Window.heightScale(0.05)}px`};
`;

export const Title = styled.Text`
  font-size: ${`${Window.fontScale(24)}px`};
  font-family: ${theme.fonts.semiBold};
  color: ${theme.colors.primaryText};
`;

export const WrapperFields = styled.View`
  padding-vertical: ${`${Window.heightScale(0.01)}px`};
  padding-horizontal: ${`${Window.widthScale(0.08)}px`};
`;

// TODO ARRUMA AE JAPA
export const RowSubmit = styled.View`
  margin-horizontal: ${`${Window.widthScale(0.09)}px`};
  margin-vertical: ${`${Window.heightScale(0.072)}px`};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const WrapperRegister = styled.TouchableWithoutFeedback.attrs({
  activeOpacity: 0.75,
})``;

export const SubmitText = styled.Text`
  font-size: ${`${Window.fontScale(14)}px`};
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primaryText};
`;

export const CircleCheck = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75
})`
  width: ${`${Window.widthScale(0.18)}px`};
  height: ${`${Window.widthScale(0.18)}px`};
  border-radius: ${`${Window.widthScale(0.1)}px`};
  justify-content: center;
  align-items: center;
  elevation: 15;
  background-color: ${theme.colors.secoundColor};
`;

export const ArrowIcon = styled(Icon).attrs({
  name: 'arrow-right',
  color: theme.colors.primaryText,
  size: 32,
})``;
