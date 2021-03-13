import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import * as colors from './theme';
import AppNavigator from './rootNavigator';

class AppContent extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor={colors.primaryColor}
          barStyle="dark-content"
        />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </>
    );
  }
}

export default AppContent;
