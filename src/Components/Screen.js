import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Container from './Container';
import ContainerFluid from './ContainerFluid';
import CommonText from './CommonText';

function Screen({ navigation, children, title, backTo }) {
  return (
    <ContainerFluid>
      <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          colors={['#0078A6', '#16CFF3']}
          style={{ width: '100%', height: '100%' }}
        >
          <Container style={{ alignItems: 'flex-start', paddingTop: 50 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate(backTo)}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="chevron-left" color="#FFF" size={24} />
                  <CommonText style={{ fontSize: 15, color: '#FFF' }}>
                    Voltar
                  </CommonText>
                </TouchableOpacity>
              </View>
              <CommonText
                style={{
                  flex: 2,
                  fontSize: 17,
                  textTransform: 'uppercase',
                  color: '#FFF',
                  textAlign: 'center',
                }}
              >
                {title}
              </CommonText>
              <View style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 25, alignItems: 'center', marginTop: 10 }}>
              {children}
            </View>
          </Container>
        </LinearGradient>
      </KeyboardAvoidingView>
    </ContainerFluid>
  );
}

export default Screen;
