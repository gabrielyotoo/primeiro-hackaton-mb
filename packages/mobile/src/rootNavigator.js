import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import TargeDetail from './screens/TargetDetail';
import Home from './screens/Home';

const RootStack = createStackNavigator();
const ContentStack = createStackNavigator();

const routes = [
  {
    name: 'home',
    component: (
      <ContentStack.Screen
        name="home"
        component={Home}
        key="home"
        options={{ headerShown: false }}
      />
    ),
  },
  {
    name: 'targetDetail',
    component: (
      <ContentStack.Screen
        name="targetDetail"
        key="targetDetail"
        component={TargeDetail}
        options={{
          header: (props) => <Header {...props} title="meta" />,
        }}
      />
    ),
  },
];

const ContentNavigator = () => (
  <ContentStack.Navigator>
    {routes.map((item) => item.component)}
  </ContentStack.Navigator>
);

const RootNavigator = () => (
  <RootStack.Navigator
    initialRouteName=""
    screenOptions={{ header: () => <></> }}
  >
    <RootStack.Screen name="Content" component={ContentNavigator} />
  </RootStack.Navigator>
);

export default RootNavigator;
