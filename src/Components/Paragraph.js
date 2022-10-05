import React from 'react';
import { Text } from 'react-native';

function Paragraph({ children, style }) {
  return <Text style={{ paddingBottom: 20, ...style }}>{children}</Text>;
}

export default Paragraph;
