import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import * as colors from '@hackaton-mobile/theme';

import { styles } from './AppContent.style';
import AppNavigator from './navigationStack';

class AppContent extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
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
