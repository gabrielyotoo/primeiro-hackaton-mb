import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const HomeNavigator = createStackNavigator();

const Home = () => (
  <HomeNavigator.Navigator>
    <HomeNavigator.Screen name="home" component={Home} />
    <HomeNavigator.Screen name="targetDetail" component={Home} />
    <HomeNavigator.Screen name="goalDetail" component={Home} />
  </HomeNavigator.Navigator>
);

export default Home;
