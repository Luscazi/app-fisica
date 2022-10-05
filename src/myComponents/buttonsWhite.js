// import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  containerCatBtn: {
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    margin: 0,
  },
  catButton: {
    paddingVertical: 15,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'Roboto_400Regular',
  },
});

const ButtonWhite = ({ largura, texto, press }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        width: largura,
        marginTop: 20,
      }}
    >
      <TouchableOpacity
        onPress={press}
        style={[
          styles.containerCatBtn,
          {
            backgroundColor: '#fff',
          },
        ]}
      >
        <Text
          style={[
            styles.catButton,
            { color: '#7C72FF', fontFamily: 'Roboto_700Bold' },
          ]}
        >
          {texto}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWhite;
