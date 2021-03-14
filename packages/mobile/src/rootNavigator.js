import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import TargeDetail from './screens/TargetDetail';
import Home from './screens/Home';
import CreateTarget from './screens/CreateTarget';
import GoalDetail from './screens/GoalDetail';
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
    name: 'goalDetail',
    component: (
      <ContentStack.Screen
        name="goalDetail"
        key="goalDetail"
        component={GoalDetail}
        options={{
          header: (props) => <Header {...props} title="atividade" />,
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
    <RootStack.Screen name="Auth" component={AuthNavigator} />
    <RootStack.Screen name="Content" component={ContentNavigator} />
  </RootStack.Navigator>
);

export default RootNavigator;
