import React from 'react';
import { StyleSheet,ImageBackground, StatusBar,View,  Image ,TouchableOpacity} from 'react-native'
import { Divider, Card, ListItem, Button ,SocialIcon,Header ,Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';
// onPress={() => navigation.navigate('Login')}
const BackgroundImg = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };
const WhiteLogoimage = { uri: "https://i.ibb.co/TvC1Gwg/white-third-eye-logo.png" };
const BlackLogoimage = { uri: "https://i.ibb.co/nBBB7hY/black-third-eye-logo.png" };


const Home = ({navigation}) => {
  return (
    //SOS
    <>
    <StatusBar backgroundColor="#fff" />
<View style={styles.container}>
    <ImageBackground source={BackgroundImg} resizeMode="cover" style={styles.image}>
<Image style={{    flex: .3, 
   justifyContent: "center",
   alignSelf: "center",
    resizeMode: "contain", width:"80%"}} source={WhiteLogoimage}/>
        <View style={styles.girdContainer}>
            
            <TouchableOpacity style={styles.box1}>
                    <Text style={[styles.text1,{color:"#EC0101"}]}>    
                <Icon  name="exclamation-triangle" backgroundColor="#fff" size={75} color="#EC0101"/>
                    EMERGENCY</Text>
            </TouchableOpacity>

            <Divider style={{ width: "90%", margin: 18 }} color="#FFF" insetType="middle" subHeaderStyle={{}} width={1}
                orientation="horizontal" />

            <TouchableOpacity style={[styles.box1,{backgroundColor: '#71EFA3',}]}>
                <Icon.Button name="map" backgroundColor="#71EFA3" size={60} color="#1F441E">
                    <Text style={styles.text1}>Your Location</Text>
                </Icon.Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.text2}>

                <Icon name="pencil" backgroundColor="#71EFA3" size={15} color="#1F441E"/>
            update</Text>
                <Text style={styles.text}>hye</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.text}>hye</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text >hye</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.text}>hye</Text>
            </TouchableOpacity>
        </View>

    </ImageBackground>
</View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    justifyContent: "center",
    
  },
  imageLogo: {
    width: 400,
    height: 50,
    top:0

  },
  text: {
    color: "#000",
    fontSize: 12,
    lineHeight: 50,
    fontFamily: 'merriweather',

    
  },
    text1: {
    color: "#000",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "montserrat"
    
  },
    text2: {
    color: "#000",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",

    
  },
  girdContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
   box1: {
    height:  110,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    margin: 6,
    backgroundColor: "#fff",
    borderRadius: 15,

    shadowColor: "#393e46",
    elevation: 5,
  },
  
  box: {
    height:  110,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    margin: 6,
    backgroundColor: "#C2FFD9",
    borderRadius: 12,

    shadowColor: "#393e46",
    elevation: 5,
  },

});

