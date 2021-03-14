import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import TargeDetail from './screens/TargetDetail';
import Home from './screens/Home';
import CreateTarget from './screens/CreateTarget';

// authstack
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';

const RootStack = createStackNavigator();
const ContentStack = createStackNavigator();
const AuthStack = createStackNavigator();

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
  {
    name: 'createTarget',
    component: (
      <ContentStack.Screen
        name="createTarget"
        key="createTarget"
        component={CreateTarget}
        options={{
          header: (props) => <Header {...props} title="Criar meta" />,
        }}
      />
    ),
  },
];

const authRoutes = [
  {
    name: 'login',
    component: (
      <AuthStack.Screen
        name="login"
        component={Login}
        key="login"
        options={{ headerShown: false }}
      />
    ),
  },
  {
    name: 'register',
    component: (
      <AuthStack.Screen
        name="register"
        key="register"
        component={Register}
        options={{ headerShown: false }}
      />
    ),
  },
];

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    {authRoutes.map((item) => item.component)}
  </AuthStack.Navigator>
);

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
    <RootStack.Screen name="Auth" component={AuthNavigator} />
  </RootStack.Navigator>
);

export default RootNavigator;
