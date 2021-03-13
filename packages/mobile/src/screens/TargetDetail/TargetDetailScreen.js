import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { colors } from '../../theme/index.json';

const TargetDetailScreen = () => (
  <View>
    <StatusBar backgroundColor={colors.primaryColor} />
    <Text>TESTEEE</Text>
  </View>
);

export default TargetDetailScreen;
