import React from 'react';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const DisplayIcon = ({ name, size }) => <Icon name={name} size={size} />;

DisplayIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
};
export default DisplayIcon;
