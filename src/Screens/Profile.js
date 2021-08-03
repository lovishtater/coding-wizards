import React from 'react';
import { StyleSheet,ImageBackground } from 'react-native'
import { View, Text, Image } from 'react-native'
import { Divider, Card, Button, Icon ,SocialIcon,Header , ListItem, Avatar} from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import Login from './Login';
// onPress={() => navigation.navigate('Login')}
const image = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  
]
const Blog = ({navigation}) => {
  return (
    //SOS
    <>
      <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
<ListItem
  Component={TouchableScale}
  friction={90} //
  tension={100} // These props are passed to the parent component (here TouchableScale)
  activeScale={0.95} //
  linearGradientProps={{
    colors: ['#FF9800', '#F44336'],
    start: { x: 1, y: 0 },
    end: { x: 0.2, y: 0 },
  }}
  ViewComponent={LinearGradient} // Only if no expo
>
  <Avatar rounded source={{ uri:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }} />
  <ListItem.Content>
    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
      Chris Jackson
    </ListItem.Title>
    <ListItem.Subtitle style={{ color: 'white' }}>
      Vice Chairman
    </ListItem.Subtitle>
  </ListItem.Content>
  <ListItem.Chevron color="white" />
</ListItem>  
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

