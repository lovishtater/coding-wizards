import React from 'react';
import {Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home.js';
import Login from './Screens/Login.js';
import Blog from './Screens/Blog';
import Profile from './Screens/Profile';

// import Add from './screens/Add';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e64"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="Feed"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
              <Text style={{color: tintColor}}><Icon name="home"></Icon></Text>
            ),
            
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Login}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({tintColor}) => (
              <Text style={{color: tintColor}}><Icon name="home"></Icon></Text>
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Blog}
          options={{
            tabBarLabel: 'Learn',
            tabBarIcon: ({tintColor}) => (
              <Text style={{color: tintColor}}><Icon name="home"></Icon></Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
              <Text style={{color: tintColor}}><Icon name="user"></Icon></Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
