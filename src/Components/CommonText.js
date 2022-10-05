import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#303030',
  },
});

const CommonText = (props) => {
  const { style } = props;
  return <Text {...props} style={{ ...styles.text, ...style }} />;
};

export default CommonText;
