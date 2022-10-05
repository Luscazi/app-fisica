/* eslint-disable camelcase */
import React, { useState, useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import {
  MontserratAlternates_300Light,
  MontserratAlternates_700Bold,
} from '@expo-google-fonts/montserrat-alternates';
import { LogBox, StatusBar } from 'react-native';
import * as Sentry from 'sentry-expo';
import * as Notification from 'expo-notifications';

import Tutorial from './src/Pages/Tutorial';
import Inicial from './src/Pages/Inicial';
import AppContext from './src/Contexts/AppContext';
import useCategorias from './src/Hooks/useCategorias';
import ApresentarTeste from './src/Pages/ApresentarTeste';
// import Questao from './src/Pages/Questao';
import Questoes from './src/Pages/Questoes';

const Stack = createStackNavigator();

Sentry.init({
  dsn:
    'https://8f493671de2847c69c0786f15b0eafd0@o501026.ingest.sentry.io/5627913',
  enableInExpoDevelopment: false,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

const App = () => {
  const [accepted, setAccepted] = useState(null);
  const [token, setToken] = useState();
  const [recentes, setRecentes] = useState([]);

  const { getItem, setItem } = useAsyncStorage('key');

  const categoriasHook = useCategorias(Notification.getExpoPushTokenAsync());

  const navigation = useRef();

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    MontserratAlternates_300Light,
    MontserratAlternates_700Bold,
  });

  const acharToken = async () => {
    const { data } = await Notification.getExpoPushTokenAsync();
    setToken(data);
  };

  useEffect(() => {
    acharToken();
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    AsyncStorage.getItem('@App:accepted').then((acc) => {
      setAccepted(acc === '1');
    });
  }, []);

  return !fontsLoaded || accepted === null ? (
    <AppLoading />
  ) : (
    <AppContext.Provider
      value={{
        categoriasHook,
        token,
        recentes,
        setRecentes,
        getItem,
        setItem,
      }}
    >
      <NavigationContainer ref={navigation}>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator
          initialRouteName={accepted ? 'Inicial' : 'Tutorial'}
          headerMode="none"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Tutorial" component={Tutorial} />
          <Stack.Screen name="Inicial" component={Inicial} />
          <Stack.Screen name="apresentar" component={ApresentarTeste} />
          <Stack.Screen name="questao" component={Questoes} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
