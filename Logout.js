import React, { useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ navigation }) => {
  useEffect(() => {
    const logout = async () => {
      await AsyncStorage.clear();
      navigation.replace('Login');
    };
    logout();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Logging out...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logout;
