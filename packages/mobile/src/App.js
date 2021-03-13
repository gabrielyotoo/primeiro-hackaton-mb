import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';

import AppContent from './AppContent';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <StoreProvider store={store}>{/* <AppContent /> */}</StoreProvider>;
  }
}
