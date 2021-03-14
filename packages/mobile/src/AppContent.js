import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import theme from './theme/index.json';
import AppNavigator from './rootNavigator';
import { Loading } from './components/Loading/Loading.style';

class AppContent extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      <>
        <StatusBar
          translucent
          backgroundColor={theme.colors.secoundColor}
          barStyle="light-content"
        />
        <NavigationContainer>
          <AppNavigator />
          {loading && <Loading />}
        </NavigationContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading.loading,
});

export default connect(mapStateToProps, null)(AppContent);
