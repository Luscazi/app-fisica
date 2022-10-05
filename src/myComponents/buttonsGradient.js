import { LinearGradient } from 'expo-linear-gradient';
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

const ButtonGradient = ({ largura, texto, press }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        width: largura,
        marginTop: 20,
      }}
    >
      <TouchableOpacity style={styles.containerCatBtn} onPress={press}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={['#1C8ED9', '#2618A8']}
        >
          <Text style={styles.catButton}>{texto}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGradient;
