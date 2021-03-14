import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarComponent from '../../components/TabBar';

import HomeScreen from './HomeScreen/Home';
import WeekScreen from './WeekScreen';

const HomeTabBar = createBottomTabNavigator();

const Home = () => (
  <HomeTabBar.Navigator
    screenOptions={{ header: () => <></> }}
    tabBar={(props) => <TabBarComponent {...props} />}
  >
    <HomeTabBar.Screen name="home" component={HomeScreen} />
    <HomeTabBar.Screen name="week" component={WeekScreen} />
  </HomeTabBar.Navigator>
);

export default Home;
