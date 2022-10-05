import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TutorialStyle from '../../Styles/TutorialStyle';
import Title from '../../Components/Title';
import Colors from '../../Styles/Colors';
import CommonText from '../../Components/CommonText';
import Icone from '../../Assets/icon-simula.png';

function TutorialPassoDois({ onNext }) {
  return (
    <View testID="PassoDois" style={TutorialStyle.slide}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingVertical: 80,
        }}
      >
        <Title
          style={{
            color: Colors.white,
            textAlign: 'center',
            marginBottom: 30,
            fontSize: 18,
          }}
        >
          Monitore seu rendimento
        </Title>
        <Image
          source={Icone}
          style={{
            width: '100%',
            resizeMode: 'contain',
          }}
        />
        <CommonText style={{ ...TutorialStyle.text, color: Colors.white }}>
          Obtenha feedback de sua evolução na compreensão de cada assunto na
          hora
        </CommonText>
      </View>
      <TouchableOpacity
        onPress={onNext}
        style={{
          marginBottom: 50,
          padding: 10,
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            color: Colors.white,
          }}
        >
          Próximo
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TutorialPassoDois;
