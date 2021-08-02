
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet,ImageBackground } from 'react-native'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button ,SocialIcon} from 'react-native-elements'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const image = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };
const WhiteLogoimage = { uri: "https://i.ibb.co/TvC1Gwg/white-third-eye-logo.png" };

const Login = () => {
  // GoogleSignin.configure();
  // signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     this.setState({ userInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };
  // isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   this.setState({ isLoginScreenPresented: !isSignedIn });
  // };
  // getCurrentUser = async () => {
  //   const currentUser = await GoogleSignin.getCurrentUser();
  //   this.setState({ currentUser });
  // };
  // signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     this.setState({ user: null }); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // revokeAccess = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     console.log('deleted');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // try {
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // google services are available
  // } catch (err) {
  //   console.error('play services are not available');
  // }
    return (
      <>
        <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Image style={{    flex: .3, 
   justifyContent: "center",
   alignSelf: "center",
    resizeMode: "contain", width:"80%"}} source={WhiteLogoimage}/>
              <Card>
  <Card.Title>Log In</Card.Title>

  <GoogleSigninButton
    style={{ width: 330, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    // onPress={this._signIn}
    // disabled={this.state.isSigninInProgress} 
  />


<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>
{/* <SocialIcon
  title='Sign In With Google'
  button
  type='google'
/> */}
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
    );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
   justifyContent: "center",
    resizeMode: "contain",

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