import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Container = (props) => {
  const { style } = props;
  return <View {...props} style={{ ...styles.container, ...style }} />;
};

export default Container;
