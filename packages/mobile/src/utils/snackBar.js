import SnackBar from 'react-native-snackbar';
import theme from '../theme/index.json';

export const message = (text) => SnackBar.show({
  text,
  duration: SnackBar.LENGTH_LONG,
  textColor: theme.colors.primaryText,
  backgroundColor: theme.colors.secoundColor,
  fontFamily: theme.fonts.semiBold,
});
