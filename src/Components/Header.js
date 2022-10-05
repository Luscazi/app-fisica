import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight + 20,
  },
});

const Header = (props) => {
  const { style } = props;
  return <View {...props} style={{ ...styles.header, ...style }} />;
};

export default Header;
