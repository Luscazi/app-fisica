import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import check from '../../assets/images/chcek.png';

const styles = StyleSheet.create({
  image: {
    height: 44,
    width: 44,
  },
  desmarcado: {
    height: 44,
    width: 44,
    backgroundColor: '#D8D8D8',
    borderRadius: 22,
  },
});

const Checkbox = ({ estado, atual, indice }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        atual(indice);
      }}
    >
      {estado === indice && <Image source={check} style={styles.image} />}
      {!(estado === indice) && <View style={styles.desmarcado} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
