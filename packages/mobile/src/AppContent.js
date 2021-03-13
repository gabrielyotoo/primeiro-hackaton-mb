import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import * as colors from './theme';
import AppNavigator from './rootNavigator';

class AppContent extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <StatusBar
            translucent
            backgroundColor={colors.primaryColor}
            barStyle="dark-content"
          />
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default AppContent;
