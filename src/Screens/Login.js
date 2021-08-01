
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'native-base'
const Login = () => {
    return (
        <Text>login page</Text>
    )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});