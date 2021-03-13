import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import HomeScreen from './screens/Home/HomeScreen/Home';

const RootStack = createStackNavigator();
const HomeTabBar = createBottomTabNavigator();

const routes = [
  {
    name: 'home',
    component: (
      <HomeTabBar.Screen
        name="home"
        component={HomeScreen}
        key="home"
        options={{
          tabBarIcon: () => <Ionicons name="md-home-outline" size={30} />,
        }}
      />
    ),
  },
];

const ContentNavigator = () => (
  <HomeTabBar.Navigator>
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
