import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  imgQuestaoContainer: {
    alignItems: 'center',
  },
  imgQuestao: {
    borderColor: '#fff',
    borderWidth: 2,
    marginTop: 10,
    minHeight: 50,
  },
  arrowContainer: {
    alignItems: 'flex-end',
  },
  arrow: {
    backgroundColor: 'rgba(0,0,0,.2)',
    padding: 15,
    borderBottomLeftRadius: 30,
    position: 'absolute',
    zIndex: 2,
    top: 10,
  },
});

const Imagem = ({ imagem }) => {
  const [width, setWidth] = useState(screenWidth / 4);
  const [ampliado, setAmpliado] = useState(false);
  const [arrow, setArrow] = useState(false);

  function ampliar(b) {
    if (b) {
      setWidth(screenWidth / 4);
      setArrow(
        <FontAwesome name="arrows-alt" color="rgb(255,255,255)" size={20} />
      );
    }
    if (!b) {
      setWidth(screenWidth / 1.1);
      setArrow(
        <FontAwesome5
          name="compress-arrows-alt"
          color="rgb(255,255,255)"
          size={20}
        />
      );
    }
    setAmpliado(!ampliado);
  }

  useEffect(() => {
    setArrow(
      <FontAwesome name="arrows-alt" color="rgb(255,255,255)" size={20} />
    );
  }, []);

  return (
    <View style={styles.imgQuestaoContainer}>
      <TouchableOpacity
        onPress={() => {
          ampliar(ampliado);
        }}
      >
        <View style={styles.arrowContainer}>
          <View style={styles.arrow}>{arrow}</View>
          <AutoHeightImage
            width={width}
            style={styles.imgQuestao}
            source={{ uri: imagem }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Imagem;
