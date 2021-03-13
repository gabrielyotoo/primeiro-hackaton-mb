import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarComponent from '../../components/TabBar';

import HomeScreen from './HomeScreen/Home';

const HomeTabBar = createBottomTabNavigator();

const Home = () => (
  <HomeTabBar.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <TabBarComponent {...props} />}
  >
    <HomeTabBar.Screen name="home" component={HomeScreen} />
  </HomeTabBar.Navigator>
);

export default Home;
