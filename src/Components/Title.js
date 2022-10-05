import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 17,
    color: '#fff',
  },
});

const Title = (props) => {
  const { style } = props;
  return <Text {...props} style={{ ...styles.text, ...style }} />;
};

export default Title;
