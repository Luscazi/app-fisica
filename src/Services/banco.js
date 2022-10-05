import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const getData = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return JSON.parse(value);
};

export { storeData, getData };
