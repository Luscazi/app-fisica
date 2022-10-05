import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  wrapper: {},
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#20339c',
  },
  logo: {
    width: '70%',
    height: 150,
    resizeMode: 'contain',
  },
  textBlock: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('screen').width - 50,
    borderRadius: 15,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: '#303030',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 40,
  },
  illustration: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 50,
    color: '#43c266',
  },
  buttonStart: {
    color: '#43c266',
    textAlign: 'right',
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 18,
  },
  icon: {
    height: 100,
    resizeMode: 'contain',
  },
});
