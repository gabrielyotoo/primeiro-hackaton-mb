import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';
import TargeDetail from '../TargetDetail';

const HomeNavigator = createStackNavigator();

const Home = () => (
  <HomeNavigator.Navigator initialRouteName="targetDetail">
    <HomeNavigator.Screen name="home" component={TargeDetail} />
    <HomeNavigator.Screen
      name="targetDetail"
      component={TargeDetail}
      options={{
        header: (props) => <Header {...props} title="meta" />,
      }}
    />
    <HomeNavigator.Screen name="goalDetail" component={TargeDetail} />
  </HomeNavigator.Navigator>
);

export default Home;
