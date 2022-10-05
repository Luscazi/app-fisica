import React from 'react';
import { CheckBox as CB } from 'native-base';

const baseStyle = (checked, color, size) => ({
  width: size,
  height: size,
  borderRadius: 22,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: checked ? color : '#fff',
});

function CheckBox(props) {
  const { style, checked, color, size = 44 } = props;
  return React.createElement(CB, {
    ...props,
    style: { ...baseStyle(checked, color, size), ...style },
  });
}

export default CheckBox;
