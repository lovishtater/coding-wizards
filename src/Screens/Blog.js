import React from 'react';
import { StyleSheet,ImageBackground } from 'react-native'
import { View, Text, Image } from 'react-native'
import { Divider, Card, ListItem, Button, Icon ,SocialIcon,Header} from 'react-native-elements'
import Login from './Login';
// onPress={() => navigation.navigate('Login')}
const image = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };
// https://i.ibb.co/thg5S5b/Whats-App-Image-2021-08-02-at-9-11-26-PM.jpg
const Blog = ({navigation}) => {
  return (
    //SOS
    <>
      <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
<Card>
  <Card.Title>HELLO WORLD</Card.Title>
  <Card.Divider/>
  <Card.Image source={{uri:"https://www.shethepeople.tv/wp-content/uploads/2019/09/1.png"}} >
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
  </Card.Image>
</Card>
    </ImageBackground>
  </View>
    </>
  );
};

export default Blog;

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

