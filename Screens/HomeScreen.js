import React, {useRef, useState} from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, useWindowDimensions} from 'react-native';
import Welcome from '../src/components/Welcome';
import {Dimensions} from 'react-native';
import logo from '../assets/logo-white.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import videobg from '../assets/videobg.mp4'
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {

  const {width: screenWidth, height: screenHeigth} = Dimensions.get('window');
  const navigation = useNavigation();

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const title = 'No matter where in the world you want to go, we can help get you there.'

  return (
    <View style={{
      width: screenWidth,
      height: screenHeigth,
      opacity:1,
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
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
            <Image source={logo} resizeMode={'cover'} style={HomeStyles.logo} />
             <Button
             title={"See more"}
   onPress={() => navigation.navigate("Welcome")}
            /> 
      </View>     
    </View>
  );
}

const HomeStyles = StyleSheet.create({
  title: {
    color:"red"
  },logo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
  containerlogo : {
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
  }
})