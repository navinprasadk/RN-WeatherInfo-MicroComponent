import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

// import Navigation from './config/routes';

EStyleSheet.build({
  $primaryRed: '#F44336',
  $primaryPink: '#E91E63',
  $primaryPurple: '#9C27B0',
  $primaryBlue: '#2196F3',
  $primaryCyan: '#00BCD4',
  $primaryLightBlue: '#03A9F4',
  $primaryGreen: '#4CAF50',
  $primaryYellow: '#FFEB3B',
  $primaryOrange: '#FF9800',

  $white: '#ffffff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});
export default () => <Home />;
