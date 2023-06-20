import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen3 = ({ navigation }) => {
    const handleLogout = () => {
        navigation.navigate('Logout');
      };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'black', fontSize:20}}>THIS IS THIRD TAB</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#1A5276',
      borderRadius: 50,
      paddingVertical: 10,
      marginTop:250,
      width: 250,
      marginLeft:3,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Screen3;

