import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import HTML from 'react-native-render-html';
import ButtonGradient from './buttonsGradient';
import check from '../../assets/images/chcek.png';
import erro from '../../assets/images/erro.png';
import bandeira from '../../assets/images/right_icon.png';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Dimensions.get('screen').height,
    width: screenWidth,
    backgroundColor: '#00000080',
    top: 0,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    paddingHorizontal: '10%',
  },
  check: {
    height: screenWidth / 3,
    width: screenWidth / 3,
    marginTop: (screenWidth / 6) * -1,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Roboto_700Bold',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 35,
    color: '#068E1C',
    fontFamily: 'Roboto_500Medium',
  },
  erroContainer: {
    maxHeight: screenWidth / 1.2,
    overflow: 'hidden',
  },
  erro: {
    maxHeight: '100%',
    overflow: 'scroll',
  },
  titleFinal: {
    fontSize: 35,
    fontFamily: 'Roboto_700Bold',
    color: '#068E1C',
  },
  subtitleFinal: {
    marginTop: 10,
    fontSize: 17,
    color: '#000',
    fontFamily: 'Roboto_700Bold',
  },
  descriptionFinal: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 20,
    fontFamily: 'Roboto_400Regular',
  },
});

const Final = (props) => {
  const { navigation, total, acertos } = props;
  const calculaPorcentagem = (t, a) => {
    return parseInt((a * 100) / t);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={bandeira} style={styles.check} />
        <Text style={styles.titleFinal}>
          Nota {calculaPorcentagem(total, acertos)}%
        </Text>
        <Text style={styles.subtitleFinal}>Você concluiu o teste.</Text>
        <Text style={styles.descriptionFinal}>
          Você respondeu {total} questões e acertou {acertos} resposta correta
          na quiz.
        </Text>
        <ButtonGradient
          largura="90%"
          texto="OK"
          press={() => navigation.navigate('Inicial')}
        />
      </View>
    </View>
  );
};

const Acerto = ({ acertou, press, explicacao }) => {
  const htmlContent = `
  <div style="
    marginHorizontal: 5px,
    fontFamily: Roboto_400Regular,
    max-height: ${screenWidth / 10};
    overflow: hidden;
    background: red;
    ">
  ${explicacao}
  </div>`;

  function Acertos() {
    return (
      <>
        <Image source={check} style={styles.check} />
        <Text style={styles.title}>Parabéns!</Text>
        <Text style={styles.subtitle}>Você acertou.</Text>
        <ButtonGradient largura="60%" texto="Próximo" press={press} />
      </>
    );
  }

  function Erros() {
    return (
      <>
        <Image source={erro} style={styles.check} />
        <View style={styles.erroContainer}>
          <View style={styles.erro}>
            <HTML source={{ html: htmlContent }} contentWidth={screenWidth} />
          </View>
        </View>
        {/* <Text style={styles.erro}>{explicacao}</Text> */}
        <ButtonGradient largura="60%" texto="OK" press={press} />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {acertou && <Acertos />}
        {!acertou && <Erros />}
      </View>
    </View>
  );
};

export { Final };
export default Acerto;
