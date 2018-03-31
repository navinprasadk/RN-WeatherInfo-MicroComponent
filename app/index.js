import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

// import Navigation from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#2196F3',
  $white: '#ffffff',
});
export default () => <Home />;
