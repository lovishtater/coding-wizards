import React from 'react';
import {StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import FooterTabs from '../components/Footer';
const Home = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Login')}>
        <Text>Go to Login homee Screen </Text>
      </TouchableOpacity>
      {/* <FooterTabs/> */}
    </>
  );
};

export default Home;

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
