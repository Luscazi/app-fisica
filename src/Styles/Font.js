const { StyleSheet } = require('react-native');

const Font = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins_400Regular',
  },
  medium: {
    fontFamily: 'Poppins_500Medium',
  },
  semibold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  bold: {
    fontFamily: 'Poppins_700Bold',
  },
  light: {
    fontFamily: 'Poppins_300Light',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default Font;
