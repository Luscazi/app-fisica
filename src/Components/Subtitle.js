import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#303030',
  },
});

const Subtitle = (props) => {
  const { style } = props;
  return <Text {...props} style={{ ...styles.text, ...style }} />;
};

export default Subtitle;
