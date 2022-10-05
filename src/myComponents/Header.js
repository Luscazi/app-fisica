import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  lateralItem: {
    width: 30,
  },
  item: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 22,
    color: '#fff',
  },
});

const MyHeader = ({ color = '#fff', atual, total = 1, press }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.lateralItem} onPress={press}>
        <Feather name="arrow-left" color={color} size={25} />
      </TouchableOpacity>
      <Text style={styles.item}>{`${atual} de ${total}`}</Text>
      <View style={styles.lateralItem} />
    </View>
  );
};

export default MyHeader;
