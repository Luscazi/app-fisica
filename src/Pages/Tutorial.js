import React, { useState, useRef } from 'react';
import { ImageBackground, StatusBar, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContainerFluid from '../Components/ContainerFluid';
import Styles from '../Styles/TutorialStyle';
import TutorialPassoUm from './Tutorial/TutorialPassoUm';
import TutorialPassoDois from './Tutorial/TutorialPassoDois';
import TutorialPassoTres from './Tutorial/TutorialPassoTres';
import TutorialStyle from '../Styles/TutorialStyle';

const Tutorial = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  const swiper = useRef();

  function acceptAndStart() {
    AsyncStorage.setItem('@App:accepted', '1').then(() => {
      navigation.navigate('Inicial');
    });
  }

  function nextSlide() {
    swiper.current.scrollBy(1);
  }

  return (
    <ContainerFluid style={TutorialStyle.background}>
      <Swiper
        ref={swiper}
        showsPagination
        scrollEnabled
        loop={false}
        index={index}
        activeDotColor="#fff"
        dotColor="#707070"
      >
        <TutorialPassoUm onNext={nextSlide} />
        <TutorialPassoDois onNext={nextSlide} />
        <TutorialPassoTres onNext={acceptAndStart} />
      </Swiper>
    </ContainerFluid>
  );
};

export default Tutorial;
