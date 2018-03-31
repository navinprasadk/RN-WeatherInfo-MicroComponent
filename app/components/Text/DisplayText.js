import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { DisplayIcon } from '../Icon';

const DisplayText = ({ text, icon = false }) => (
  <View>
    {icon ? (
      <Text style={styles.displayText}>
        {' '}
        <DisplayIcon style={styles.displayLocationIcon} name="crosshairs-gps" size={18} />
        {text}
      </Text>
    ) : (
      <Text style={styles.displayText}>{text}</Text>
    )}
  </View>
);

DisplayText.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.bool,
};
export default DisplayText;
