import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    minWidth: '100%',
    maxWidth: '100%',
  },
});

const ImageFull = (props) => {
  const { style } = props;
  return <Image {...props} style={{ ...styles.image, ...style }} />;
};

export default ImageFull;
