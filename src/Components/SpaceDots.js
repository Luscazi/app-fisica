import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 50,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 10,
    paddingRight: 20,
  },
  bigDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#EFEFEF',
  },
});

const SpaceDots = ({ color }) => (
  <View style={styles.container}>
    <View style={[styles.bigDot, { backgroundColor: color }]} />
    <View style={styles.dot} />
    <View style={styles.dot} />
    <View style={styles.dot} />
  </View>
);

export default SpaceDots;
