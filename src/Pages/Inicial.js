import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Container from '../Components/Container';
import ContainerFluid from '../Components/ContainerFluid';
import Title from '../Components/Title';
import AppContext from '../Contexts/AppContext';
import Circulos from '../myComponents/circulos';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: (-1 * screenHeight) / 10,
  },
  item: {
    backgroundColor: '#0474c1',
    paddingVertical: 20,
    marginVertical: 8,
    marginHorizontal: screenWidth * 0.04,
    width: screenWidth * 0.8,
    minHeight: screenWidth * 0.45,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight / 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#827afa',
  },
  helpText: {
    position: 'absolute',
    color: Colors.white,
    alignSelf: 'flex-end',
    bottom: 15,
    right: 15,
  },
  testes: {
    width: screenWidth,
    flexDirection: 'column',
    paddingHorizontal: screenWidth * 0.04,
  },
  containerLast: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomColor: 'rgba(115,115,115,0.3)',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  catTitle: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
  },
  catDescription: {
    color: '#6B6A6A',
    fontSize: 12,
    marginVertical: 5,
    fontFamily: 'Roboto_400Regular',
  },
  catLast: {
    color: '#969696',
    fontSize: 11,
    fontFamily: 'Roboto_400Regular',
  },
  containerCatBtn: {
    width: 130,
    borderRadius: 30,
    overflow: 'hidden',
    margin: 0,
  },
  catButton: {
    paddingVertical: 10,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'Roboto_400Regular',
  },

  headerContainer: {
    width: '100%',
    height: screenHeight / 3 + screenWidth * 0.23,
  },
  header: {
    width: '100%',
    height: screenHeight / 3,
    backgroundColor: '#20339c',
    overflow: 'hidden',
    position: 'relative',
  },
  headerTitleContainer: {
    alignItems: 'center',
    paddingTop: screenHeight / 9,
  },
  headerTitle: {
    fontSize: 20,
    paddingLeft: 10,
    color: Colors.white,
  },
  recentesContainer: {
    alignItems: 'flex-start',
    paddingTop: screenHeight / 30,
    flex: 1,
    paddingBottom: 10,
  },
  titleRecentes: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 20,
    marginTop: 30,
  },
});

const Item = ({ categoria, navigation }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{categoria.nome}</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('apresentar', categoria)}
    >
      <Text style={styles.label}>Começar</Text>
    </TouchableOpacity>
    <Text style={styles.helpText}>
      Última tentativa: {categoria.ultimaTentativa ?? 0}%
    </Text>
  </View>
);

const Recente = ({ categoria, navigation }) => {
  return (
    <View style={styles.containerLast}>
      <View style={{ flex: 1 }}>
        <Text style={styles.catTitle}>{categoria.item.nome}</Text>
        <Text style={styles.catDescription}>{categoria.item.descricao}</Text>
        <Text style={styles.catLast}>
          Última tentativa: {categoria.item.ultimaTentativa}%
        </Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.containerCatBtn}
          onPress={() => navigation.navigate('apresentar', categoria.item)}
        >
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={['#1C8ED9', '#2618A8']}
          >
            <Text style={styles.catButton}>Começar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function Inicial({ navigation }) {
  const { categoriasHook, recentes, getItem } = useContext(AppContext);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getItem().then((item) => {
      if (item) {
        const { dados } = JSON.parse(item);
        setCategorias(dados);
      }
    });
  }, [recentes]);

  return (
    <ScrollView>
      <ContainerFluid style={{ flex: 1, minHeight: screenHeight }}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.headerTitleContainer}>
              <Title style={styles.headerTitle}>Estude Física</Title>
            </View>
          </View>
          <SafeAreaView style={styles.container}>
            <FlatList
              horizontal
              data={categoriasHook.categorias}
              renderItem={({ item }) => (
                <Item navigation={navigation} categoria={item} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </SafeAreaView>
          <Circulos />
        </View>
        <Container style={styles.recentesContainer}>
          <View style={styles.testes}>
            <Text style={styles.titleRecentes}>Testes Recentes</Text>
            <SafeAreaView>
              {categorias && (
                <FlatList
                  data={categorias}
                  renderItem={(item) => (
                    <Recente navigation={navigation} categoria={item} />
                  )}
                  keyExtractor={(item) => item.id.toString()}
                />
              )}
            </SafeAreaView>
          </View>

          {/* <SafeAreaView style={{ marginTop: 10 }}>
          <ScrollView>
            <View style={{ paddingTop: 20, paddingBottom: 100 }}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 20,
                  paddingVertical: 30,
                  borderRadius: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('TermoUso')}
                  style={{ paddingBottom: 15 }}
                >
                  <CommonText style={Font.underline}>Termos de Uso</CommonText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PoliticaPrivacidade')}
                  style={{ paddingBottom: 15 }}
                >
                  <CommonText style={Font.underline}>
                    Política de Privacidade
                  </CommonText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PoliticaCookies')}
                >
                  <CommonText style={Font.underline}>
                    Política de Cookies
                  </CommonText>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView> */}
        </Container>
      </ContainerFluid>
    </ScrollView>
  );
}

export default Inicial;
