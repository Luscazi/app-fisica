import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: '#303030',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
  },
  label: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#2DBB54',
  },
});

export const ActionButtonWhite = (props) => {
  const { style } = props;
  return (
    <TouchableHighlight {...props} underlayColor="#2DBB54">
      <View {...props} style={{ ...styles.button, ...style }} />
    </TouchableHighlight>
  );
};

export const ActionLabel = (props) => {
  const { style } = props;
  return <Text {...props} style={{ ...styles.label, ...style }} />;
};
