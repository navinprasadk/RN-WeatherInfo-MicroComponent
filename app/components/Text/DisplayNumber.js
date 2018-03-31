import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { DisplayIcon } from '../Icon';

const DisplayNumber = ({ text, icon = false }) => (
  <View>
    {icon ? (
      <Text style={styles.displayNumber}>
        {text}
        <DisplayIcon name="temperature-celsius" size={25} />
      </Text>
    ) : (
      <Text style={styles.displayNumber}>{text}iconfalse</Text>
    )}
  </View>
);

DisplayNumber.propTypes = {
  text: PropTypes.number,
  icon: PropTypes.bool,
};
export default DisplayNumber;
