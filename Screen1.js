import React,{ useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Screen1 = () => {
  const [apiData, setApiData] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch('https://www.myjsons.com/v/8e2c1266')
      .then((data) => data.json())
      .then((response) => {
        setApiData(response);
      });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:'black', fontSize:20}}>THIS IS FIRST TAB</Text>
    </View>
  );
};

export default Screen1;

