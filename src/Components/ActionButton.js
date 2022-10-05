import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  touch: {
    width: '100%',
    height: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: '#303030',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
  },
  label: {
    fontFamily: 'Poppins_300Light',
    fontSize: 16,
    color: '#fff',
  },
});

export const ActionButton = ({ onPress, style, disabled, children }) =>
  disabled ? (
    <View
      style={{
        ...styles.touch,
        width: style?.width ?? styles.touch.width,
        height: style?.height ?? styles.touch.height,
      }}
    >
      <LinearGradient
        start={[1, 0]}
        end={[0, 0]}
        colors={['#d5d5d5', '#a0a0a0']}
        style={{ ...styles.button, ...style }}
      >
        {children}
      </LinearGradient>
    </View>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.touch,
        width: style?.width ?? styles.touch.width,
        height: style?.height ?? styles.touch.height,
      }}
      hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
    >
      <LinearGradient
        start={[1, 0]}
        end={[0, 0]}
        colors={['#16CFF3', '#0078A6']}
        style={{ ...styles.button, ...style }}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );

export const ActionLabel = (props) => {
  const { style } = props;
  return <Text {...props} style={{ ...styles.label, ...style }} />;
};
