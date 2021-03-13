import { Dimensions } from 'react-native';

export const winWidth = Dimensions.get('window').width;
const guidelineBaseWidth = 350;

export const widthScale = (percentage) =>
  Dimensions.get('window').width * percentage;
export const heightScale = (percentage) =>
  Dimensions.get('window').height * percentage;
export const fontScale = (size) => size * (winWidth / guidelineBaseWidth);