import React from 'react';
import { StyleSheet,ImageBackground, StatusBar,View,  Image ,TouchableOpacity} from 'react-native'
import { Divider, Card, ListItem, Button ,SocialIcon,Header ,Text} from 'react-native-elements'
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';
import EmergencyContact from './EmergencyContact';
import w from "../assets/3women.png"
// onPress={() => navigation.navigate('Login')}
const BackgroundImg = { uri: "https://i.ibb.co/KsR6Lzf/background-3x.png" };
const WhiteLogoimage = { uri: "https://i.ibb.co/TvC1Gwg/white-third-eye-logo.png" };
const BlackLogoimage = { uri: "https://i.ibb.co/nBBB7hY/black-third-eye-logo.png" };
const threeWomenimage = { uri: "https://i.ibb.co/nPLFjsz/3women.png" };



const Home = ({navigation}) => {
  return (
    //SOS
    <>
    <StatusBar backgroundColor="#fff" />
<View style={styles.container}>
    <ImageBackground source={BackgroundImg} resizeMode="cover" style={styles.image}>
<Image style={{    flex: .2, 
   justifyContent: "center",
   alignSelf: "center",
    resizeMode: "contain", width:"80%"}} source={WhiteLogoimage}/>

        <View style={styles.girdContainer}>
            
            <TouchableOpacity style={styles.box1}>
                    <Text style={[styles.text1,{color:"#EC0101"}]}>    
                <Icon  name="exclamation-triangle" backgroundColor="#fff" size={40} color="#EC0101"/>
                    EMERGENCY</Text>
            </TouchableOpacity>

            <Divider style={{ width: "90%", margin: 18 }} color="#000" insetType="middle" subHeaderStyle={{}} width={1}
                orientation="horizontal" />

            <TouchableOpacity style={[styles.box,{backgroundColor:"#FF5F81"}]}>
                <Icon name="pencil" backgroundColor="#71EFA3" size={25} color="#fff"/>
            <Text style={styles.text2} >  
            Create Emergency Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box,{backgroundColor:"#A469C2"}]} 
            // onPress={()=>navigation.navigate("EmergencyContact")}
            >
                <Icon name="user-o" backgroundColor="#71EFA3" size={25} color="#fff"/>
                
                <Text style={styles.text2} >View Emergency Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box,{backgroundColor:"#55D38A"}]}>
                <Icon name="handshake-o" backgroundColor="#71EFA3" size={25} color="#fff"/>
                
                <Text style={styles.text2}>Local Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.box,{backgroundColor:"#5DAEE1"}]}>
                <Icon name="podcast" backgroundColor="#71EFA3" size={25} color="#fff"/>
                
                <Text style={styles.text2}> Scream Alert</Text>
            </TouchableOpacity>
            
            
        </View>
    <Image style={{ flex: .3, justifyContent: "center", alignSelf: "center", resizeMode: "contain", width:"80%"}} source={require("../assets/3women.png")} />

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
    color: "#fff",
    fontSize: 12,
    lineHeight: 50,
    fontFamily: 'merriweather',

    
  },
    text1: {
    color: "#000",
    fontSize: 40,
    lineHeight: 100,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "montserrat"
    
  },
    text2: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",

    
  },
  girdContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
    backgroundColor:"#fff",
    borderRadius: 15,
    padding: 10,
  },
   box1: {
    height:  "30%",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    margin: 6,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth:4,
    borderColor:"#EC0101",
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

