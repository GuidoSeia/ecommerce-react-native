import React, { useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native';
import Welcome from '../src/components/Welcome';
import { Dimensions } from 'react-native';
import logo from '../assets/logo-white.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import videobg from '../assets/videobg.mp4'
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

  const { width: screenWidth, height: screenHeigth } = Dimensions.get('window');
  const navigation = useNavigation();

  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={{
      width: screenWidth,
      height: screenHeigth,
      opacity: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Video
        ref={video}
        style={HomeStyles.video}
        source={videobg}
        rate={.7}
        shouldPlay={true}
        isLooping={true}
        isMuted={true}
        resizeMode="cover"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={HomeStyles.containerlogo}>
        <Image source={logo} resizeMode={'contain'} style={HomeStyles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate("Products")}
          style={HomeStyles.button}>
          <Text style={{ fontSize: 17, color: 'white', textAlign: 'center' }}>GO HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const HomeStyles = StyleSheet.create({
  title: {
    color: "red"
  }, logo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    marginBottom: 30
  },
  containerlogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 1,
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
})