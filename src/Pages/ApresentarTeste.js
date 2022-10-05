import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import ContainerFluid from '../Components/ContainerFluid';
import circulo from '../../assets/images/circulo_invertido.png';
import ButtonWhite from '../myComponents/buttonsWhite';
import MyHeader from '../myComponents/Header';

import teste from '../../assets/images/apresentarTeste.png';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: screenWidth,
  },
  background: {
    width: screenWidth,
    height: screenWidth / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: screenWidth,
    flex: 1,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'MontserratAlternates_700Bold',
    color: '#fff',
    marginBottom: 15,
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'MontserratAlternates_300Light',
    marginBottom: screenWidth / 13,
  },
  header: {
    width: (screenWidth / 10) * 9,
  },
});

const ApresentarTeste = ({ navigation, route }) => {
  const dados = route.params;
  return (
    <ContainerFluid style={styles.container}>
      <View style={styles.header}>
        <MyHeader color="#000" press={() => navigation.navigate('Inicial')} />
      </View>
      <View style={styles.body}>
        <AutoHeightImage source={teste} width={(screenWidth / 10) * 7} />
      </View>

      <ImageBackground
        resizeMode="stretch"
        source={circulo}
        style={styles.background}
      >
        <Text style={styles.title}>{dados.nome}</Text>
        <Text style={styles.subtitle}>{dados.descricao}</Text>
        <ButtonWhite
          largura="70%"
          texto="Começar"
          press={() => navigation.navigate('questao', dados)}
        />
      </ImageBackground>
    </ContainerFluid>
  );
};

export default ApresentarTeste;
