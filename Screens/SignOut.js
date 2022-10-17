import { StyleSheet, Image, TouchableOpacity, View, Text, Button } from 'react-native';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../src/features/loggedSlice";
import { useNavigation } from "@react-navigation/native";
import { Video } from 'expo-av';
import videobg2 from '../assets/video3.mp4'
import logo from '../assets/logo-white.png'

export default function SignOut() {
  const logged = useSelector((state) => state.logged.loggedState);
  const user = useSelector((state) => state.logged.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const video = React.useRef(null);

  const getData = async () => {
    try {
      dispatch(deleteUser());
      navigation.navigate("Welcome");
      alert("Signed out!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      height: "100%",
    }}>
      <Video
        ref={video}
        style={SignOutStyles.video}
        source={videobg2}
        rate={.7}
        shouldPlay={true}
        isLooping={true}
        isMuted={true}
        resizeMode="contain"
      />
      <View style={SignOutStyles.containerIntro}>

        <Text style={SignOutStyles.titleIntro}>Are you leaving? </Text>

        <Image style={SignOutStyles.image} resizeMode={'contain'} source={logo}></Image>

        <Text style={SignOutStyles.titleInfo}>We'll see you next time!</Text>

        <TouchableOpacity onPress={getData}
          style={SignOutStyles.button}>
          <Text style={{ fontSize: 17, color: 'white', textAlign: 'center' }}>Sign Out</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const SignOutStyles = StyleSheet.create({
  containerIntro: {
    width: "90%",
    height: "50%",
    backgroundColor: "#0000009d",
    justifyContent: "space-around",
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 60
  },
  video: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 1,
  },
  titleIntro: {
    color: 'white',
    fontSize: 24,
    marginTop: 10
  },

  titleInfo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    margin: 10,
    marginHorizontal: 15,
    marginBottom: 25
  },
  button: {
    backgroundColor: '#3f0303',
    color: "white",
    marginHorizontal: 30,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    width: "40%",
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    marginBottom: 30
  },
})