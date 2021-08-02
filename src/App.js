import React from 'react';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home.js';
import Login from './Screens/Login.js';
// import Add from './screens/Add';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Feed"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
              <Text style={{color: tintColor}}>h</Text>
            ),
            
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Login}
          options={{
            tabBarLabel: 'Updates',
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Updates',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
