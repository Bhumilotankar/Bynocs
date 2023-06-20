import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import Home from './Home';
import Logout from './Logout';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator();
const App=()=>{
    return(
      
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Home" component={Info} />
       <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
    </NavigationContainer>
    
    )
    function Info(){
      return(
    <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Settings" component={Screen3} />
      </Tab.Navigator>
      )
      }
  
 
  
}; 

export default App;