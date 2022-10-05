import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  maior: {
    backgroundColor: '#2F42B2',
    height: Dimensions.get('screen').width / 1.6,
    width: Dimensions.get('screen').width / 1.6,
    top: (Dimensions.get('screen').width / 3.2) * -1,
    left: (Dimensions.get('screen').width / 3.2) * -1,
    borderRadius: Dimensions.get('screen').width / 3.2,
    position: 'absolute',
  },
  menor: {
    backgroundColor: '#2F42B2',
    height: Dimensions.get('screen').width / 2.5,
    width: Dimensions.get('screen').width / 2.5,
    top: (Dimensions.get('screen').width / 5) * -1,
    right: (Dimensions.get('screen').width / 5) * -1,
    borderRadius: Dimensions.get('screen').width / 1.7,
    position: 'absolute',
  },
});

const Circulos = () => {
  return (
    <>
      <View style={styles.maior} />
      <View style={styles.menor} />
    </>
  );
};

export default Circulos;
