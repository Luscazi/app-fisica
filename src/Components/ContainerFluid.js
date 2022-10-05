import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});

const ContainerFluid = (props) => {
  const { style } = props;
  return <View {...props} style={{ ...styles.container, ...style }} />;
};

export default ContainerFluid;
