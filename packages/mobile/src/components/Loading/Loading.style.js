import styled from 'styled-components/native';

import { colors } from '../../theme/index.json';

const Loading = styled.ActivityIndicator.attrs({
  color: colors.secoundColor,
  size: 'large',
})`
  z-index: 1000;
  background-color: ${colors.primaryColor};
  height: 100%;
  position: absolute;
  width: 100%;
`;

export { Loading };
