import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    shadowOpacity: 0.25,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
    flex: 1,
  },
});

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
