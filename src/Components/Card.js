import { View } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Colors from '../Styles/Colors';
import { ActionButton, ActionLabel } from './ActionButton';
import CommonText from './CommonText';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    minWidth: '100%',
    marginBottom: 20,
  },
  info: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.black,
    paddingBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.muted,
    paddingBottom: 20,
  },
});

function Card({
  image,
  imageHeight = 200,
  title,
  text,
  label,
  onPress,
  children,
  imageStyle,
}) {
  return (
    <View style={styles.card}>
      {image && (
        <Image
          source={image}
          style={{ ...styles.image, height: imageHeight, ...imageStyle }}
        />
      )}
      <View style={styles.info}>
        {title && <CommonText style={styles.title}>{title}</CommonText>}
        {text && <CommonText style={styles.text}>{text}</CommonText>}
        {children}
        {onPress && (
          <ActionButton onPress={onPress}>
            <ActionLabel>{label}</ActionLabel>
          </ActionButton>
        )}
      </View>
    </View>
  );
}

export default Card;
