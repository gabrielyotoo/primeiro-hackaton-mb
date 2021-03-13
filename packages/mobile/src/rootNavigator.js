import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';

const RootStack = createStackNavigator();
const HomeTabBar = createBottomTabNavigator();

const routes = [
  {
    name: 'home',
    component: <HomeTabBar.Screen name="home" component={Home} key="home" />,
  },
];

const ContentNavigator = () => (
  <HomeTabBar.Navigator screenOptions={{ headerShown: false }}>
    {routes.map((item) => item.component)}
  </HomeTabBar.Navigator>
);

const RootNavigator = () => (
  <RootStack.Navigator
    initialRouteName=""
    screenOptions={{ headerShown: false }}
  >
    <RootStack.Screen name="Content" component={ContentNavigator} />
  </RootStack.Navigator>
);

export default RootNavigator;
