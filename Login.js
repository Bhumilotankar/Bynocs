import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from './App';
import LoginErrors from './LoginErrors';
import NetInfo from '@react-native-community/netinfo';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiData, setApiData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  useEffect(() => {
    checkLoginStatus();
    getData();
  }, []);
  
  const getData = () => {
    fetch('https://www.myjsons.com/v/68d11224')
      .then((data) => data.json())
      .then((response) => {
        setApiData(response);
      });
  };
 
  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('loggedIn');
      if (isLoggedIn === 'true') {
        navigation.replace('Home',{name:name});
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
 
  const checkLogin = async () => {
    const isConnected = await NetInfo.fetch().then((state) => state.isConnected);
    if (!isConnected) {
      setErrorMessage(LoginErrors.NETWORK_ERROR);
      return;
    }
    if (!name || !password) {
      if (!name) {
        setNameError(true);
        setErrorMessage(LoginErrors.INVALID_USERNAME);

      }
      if (!password) {
        setPasswordError(true);
        setErrorMessage(LoginErrors.INVALID_PASSWORD);

      }
      return;
    }
 
    const loggedIn = apiData.users.find((user) => user.username === name && user.password === password);
 
    if (loggedIn) {
      try {
        await AsyncStorage.setItem('loggedIn', 'true');
        navigation.replace('Home',{name:name});
      } catch (error) {
        console.log('Error:', error);
      }
    } else {
      alert('Invalid username or password.');
    }
  };
 
  return (
    <View>
      <View style={{alignItems: 'center', }}>
 <Image source={require('./logo.jpeg')} style={{ alignSelf: 'center',  height: 170,  width: 200}} />
  </View>

      <Text style={{
                fontSize:18,
                marginTop:12,
                fontFamily:'times new roman',
                fontWeight:'bold',
                marginLeft:55,
                color:'black',
              }}>Name</Text>
       <View style={{  flexDirection: 'row', alignItems: 'center',borderWidth: 1, borderRadius: 10,  width: 250, 
       borderColor: nameError ? 'red' : 'black', height: 50, paddingLeft: 10,marginTop:12,marginLeft:60}}> 
        
        <TextInput maxLength={10}  style={{ flex: 1,color:'black' }} onChangeText={(text) => {
           setName(text); 
           setNameError(false);
          }}
              value={name}
              placeholder=" Enter UserName"
        />
      </View>
      <Text style={{
                fontSize:18,
                marginTop:12,
                fontFamily:'times new roman',
                fontWeight:'bold',
                marginLeft:55,
                color:'black',
              }}>Password </Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 10, width: 250,
        borderColor: passwordError ? 'red' : 'black', height: 50, paddingLeft: 10, marginTop: 12,marginLeft:60}}>
 
        <TextInput maxLength={10} style={{ flex: 1, color:'black'}} onChangeText={(text) => {
           setPassword(text);
           setPasswordError(false);
          }}
              value={password}
              placeholder=" Enter Password" 
        />
      </View>

      {errorMessage ? <Text style={{fontSize: 15,padding: 10,color:'red',marginLeft:45,marginTop:20}}>{errorMessage}</Text> : null}

      <View style={{ padding: 10, margin: 35,marginTop:2}}>
 
        <TouchableOpacity onPress={checkLogin} >
 
          <View style={{ backgroundColor: '#1A5276', padding: 10, borderRadius: 20}}>
 
            <Text style={{ color: 'white', textAlign: 'center',fontSize: 20}}>LOGIN</Text>
 
          </View>
 
        </TouchableOpacity>
 
      </View>

 
    </View>
 
  );
 
};
 
export default Login;