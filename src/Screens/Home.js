import React from 'react';
import { StyleSheet,ImageBackground } from 'react-native'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon ,SocialIcon,Header} from 'react-native-elements'
import Login from './Login';
// onPress={() => navigation.navigate('Login')}
const image = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };
const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <Card>
  <Card.Title>Home screen </Card.Title>

  <Card.Divider/>

</Card>
    </ImageBackground>
  </View>
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
    image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

