import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import theme from './theme/index.json';
import AppNavigator from './rootNavigator';

class AppContent extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor={theme.colors.secoundColor}
          barStyle="light-content"
        />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </>
    );
  }
}

export default AppContent;
