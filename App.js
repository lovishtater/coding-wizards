
import React from 'react';

import {
  Text
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Edit';
// import Add from './screens/Add';

const stack = createStackNavigator();

const App = () => {
  return(
<NavigationContainer>
  <stack.Navigator initialRouteName='home'>
  <stack.Screen 
  name='Home'
  component={Home}
  options={{headerStyle:
  {backgroundColor:'#0f4c75'},
  title:'Safety  App',
  headerTitleStyle:{
    textAlign:'center',
    color:'#00b7c2'
  }
  }}
  >

  </stack.Screen>
  <stack.Screen 
  name='Login'
  component={Login}
  options={{headerStyle:
  {backgroundColor:'#0f4c75'},
  title:'Safety App',
  headerTitleStyle:{
    textAlign:'center',
    color:'#00b7c2'
  }}}
  >
  </stack.Screen>

  

  </stack.Navigator>
</NavigationContainer>
  )
}

export default App;
