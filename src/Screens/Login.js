
import React from 'react'
import { StyleSheet,ImageBackground } from 'react-native'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon ,SocialIcon} from 'react-native-elements'

const image = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };
const Login = () => {
    return (
      <>
        <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <Card>
  <Card.Title>Log In</Card.Title>
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>
<SocialIcon
  title='Sign In With Google'
  button
  type='google'
/>
<SocialIcon
  title='Sign In With Github'
  button
  type='github'
/>
  <Card.Divider/>

</Card>
    </ImageBackground>
  </View>

</>
    )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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