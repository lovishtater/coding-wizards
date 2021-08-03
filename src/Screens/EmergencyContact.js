import React from 'react';
import { StyleSheet,ImageBackground } from 'react-native'
import { View, Text, Image } from 'react-native'
import { Divider, Card, Button, Icon ,SocialIcon,Header , ListItem, Avatar} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login';
// onPress={() => navigation.navigate('Login')}
const image = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };

const EmergencyContact = ({navigation}) => {
  return (
    //SOS
    <>
      <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
              <ListItem bottomDivider>
        <Avatar source={{uri: "https://bootdey.com/img/Content/avatar/avatar7.png"}} />
        <ListItem.Content>
          <ListItem.Title>Manish</ListItem.Title>
          <ListItem.Subtitle>9759834598</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </View>    
    </ImageBackground>
  </View>
    </>
  );
};

export default EmergencyContact;

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

