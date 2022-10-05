import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

export const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  invalid: {
    borderColor: '#f00',
  },
  error: {
    color: '#f00',
    padding: 10,
  },
});

const Input = React.forwardRef((props, ref) => {
  const { style, error, type } = props;
  let viewFlex = 1;
  if (style?.flex) {
    viewFlex = style.flex;
    delete style.flex;
  }
  const iStyle = { ...styles.input, ...style };
  if (error) {
    iStyle.borderColor = styles.invalid.borderColor;
    iStyle.marginBottom = 0;
  }
  const tInput = React.createElement(type ? TextInputMask : TextInput, {
    ...props,
    ref,
    style: iStyle,
  });
  return (
    <View style={{ ...styles.view, flex: viewFlex }}>
      {tInput}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
});

export default Input;
