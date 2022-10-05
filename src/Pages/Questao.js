import { Image } from 'native-base';
import React, { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HTML from 'react-native-render-html';
import background from '../../assets/images/circulo.png';
import Acerto, { Final } from '../myComponents/acertos';
import ButtonGradient from '../myComponents/buttonsGradient';
import Card from '../myComponents/card';
import Checkbox from '../myComponents/checkbox';
import Circulos from '../myComponents/circulos';
import MyHeader from '../myComponents/Header';
import Imagem from '../myComponents/image';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    minHeight: screenWidth,
    paddingHorizontal: '5%',
    paddingBottom: 30,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  description: {
    color: '#fff',
    fontSize: 19,
    fontFamily: 'MontserratAlternates_300Light',
    textAlign: 'center',
  },
  body: {
    marginTop: screenWidth / 15,
    paddingHorizontal: '5%',
    paddingBottom: 40,
    alignItems: 'center',
  },
});

const Questao = ({
  questao,
  proxima,
  indice = 0,
  total = 1,
  navigation,
  totalAcertos,
  setAcertos,
  respostas,
  setRespostas,
}) => {
  const [marcado, setMarcado] = useState(0);
  const [resposta, setResposta] = useState();
  const alternativas = [
    questao.resposta1,
    questao.resposta2,
    questao.resposta3,
    questao.resposta4,
  ];

  const htmlContent = `
  <div style="
  color: #fff;
  fontSize: 19px;
  font-family: MontserratAlternates_300Light;
  textAlign: 'center'">
  ${questao.enunciado}
  </div>
  `;

  const verificarCorreta = () => {
    setRespostas([...respostas, alternativas[marcado - 1]]);
    if (alternativas[marcado - 1] && indice + 1 === total) {
      if (alternativas[marcado - 1] === questao.respostaCorreta) {
        setAcertos(totalAcertos + 1);
        setResposta(
          <Acerto
            acertou
            press={() => {
              setResposta(
                <Final
                  navigation={navigation}
                  total={total}
                  acertos={totalAcertos + 1}
                />
              );
            }}
          />
        );
      } else {
        setResposta(
          <Acerto
            acertou={false}
            explicacao={questao.correcao}
            press={() => {
              setResposta(
                <Final
                  navigation={navigation}
                  total={total}
                  acertos={totalAcertos}
                />
              );
            }}
          />
        );
      }
    } else if (
      alternativas[marcado - 1] &&
      alternativas[marcado - 1] === questao.respostaCorreta
    ) {
      setAcertos(totalAcertos + 1);
      setResposta(
        <Acerto
          acertou
          press={() => {
            setMarcado(0);
            setResposta();
            proxima(indice + 1);
          }}
        />
      );
    } else if (alternativas[marcado - 1]) {
      setResposta(
        <Acerto
          acertou={false}
          explicacao={questao.correcao}
          press={() => {
            setMarcado(0);
            setResposta();
            proxima(indice + 1);
          }}
        />
      );
    }
  };

  return (
    <>
      {resposta}

      <ScrollView>
        <ImageBackground source={background} style={styles.image}>
          <Circulos />
          <MyHeader
            atual={indice + 1}
            total={total}
            press={() => navigation.navigate('Inicial')}
          />
          <View style={styles.descriptionContainer}>
            <HTML source={{ html: htmlContent }} contentWidth={screenWidth} />
          </View>
          <Imagem imagem={questao.imagem} />
        </ImageBackground>
        <View style={styles.body}>
          <Card>
            <Checkbox estado={marcado} atual={setMarcado} indice={1} />
            <Text style={{ marginLeft: 10, flex: 1 }}>{alternativas[0]}</Text>
          </Card>

          <Card>
            <Checkbox estado={marcado} atual={setMarcado} indice={2} />
            <Text style={{ marginLeft: 10, flex: 1 }}>{alternativas[1]}</Text>
          </Card>

          <Card>
            <Checkbox estado={marcado} atual={setMarcado} indice={3} />
            <Text style={{ marginLeft: 10, flex: 1 }}>{alternativas[2]}</Text>
          </Card>

          <Card>
            <Checkbox estado={marcado} atual={setMarcado} indice={4} />
            <Text style={{ marginLeft: 10, flex: 1 }}>{alternativas[3]}</Text>
          </Card>

          <ButtonGradient
            largura="80%"
            texto="Confirmar"
            press={() => verificarCorreta()}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Questao;
