import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { useGetLoginMutation } from '../src/features/usersAPI'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setUser } from "../src/features/loggedSlice";
import { Video } from 'expo-av';
import videobg2 from '../assets/video3.mp4'
export default function SignIn() {
    const navigation = useNavigation();
    const video = React.useRef(null);

    const [emailRef, setEmail] = useState()
    const [passwordRef, setPassword] = useState()

    const dispatch = useDispatch()

    const [newLogin] = useGetLoginMutation()

    const signIn = async (data) => {
        await newLogin(data)
            .then((success) => {
                let user = success?.data?.response?.user
                if (user != undefined) {
                    dispatch(setUser(user))
                    navigation.navigate('Products')
                    alert('Signed in!')
                } else {
                    alert('You wont pass!')
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleForm = async (e) => {

        e.preventDefault();

        let data = {
            email: emailRef,
            password: passwordRef,
            from: 'form'
        }
        signIn(data)
    }


    return (
        <View style={{
            width: "100%",
            height: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Video
                ref={video}
                style={SignInstyles.video}
                source={videobg2}
                rate={.7}
                shouldPlay={true}
                isLooping={true}
                isMuted={true}
                resizeMode="cover"
            />

            <View style={SignInstyles.containerForm}>
                <Text style={SignInstyles.h1}>
                    Sign In
                </Text>
                <View style={SignInstyles.inputContainer}>
                    <TextInput placeholder={' Email'} style={SignInstyles.input} onChangeText={(value) => setEmail(value)} />
                </View>
                <View style={SignInstyles.inputContainer}>
                    <TextInput secureTextEntry={true} placeholder={' Password'} style={SignInstyles.input} onChangeText={(value) => setPassword(value)} />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity onPress={handleForm}
                        style={SignInstyles.buttonLogin}>
                        <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', padding: 5 }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={SignInstyles.containerIntro}>

                <Text style={SignInstyles.titleIntro}>Do have an account?
                </Text>

                <Text style={SignInstyles.titleInfo}>If you don't, sign up here!
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Sign up')}
                    style={SignInstyles.button}>
                    <Text style={{ fontSize: 17, color: 'white', textAlign: 'center' }}>Sign Up</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const SignInstyles = StyleSheet.create({

    containerIntro: {
        width: "90%",
        height: "35%",
        backgroundColor: "#858585a8",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },

    containerForm: {
        width: "90%",
        height: "50%",
        backgroundColor: '#3a3a3aa8',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'

    },

    titleIntro: {
        color: 'white',
        fontSize: 25,
        marginTop: 10, 
    },

    titleInfo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        margin: 10,
        marginHorizontal: 15
    },
    buttonLogin: {
        backgroundColor: '#3f0303',
        color: "white",
        padding: 10,
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 2,
        justifyContent: "center",
        width: "100%",
    },

    image: {
        width: "100%",
        height: "36%",
        resizeMode: 'contain'
    },

    button: {
        backgroundColor: '#3f0303',
        color: "white",
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 20,
        borderColor: "white",
        borderWidth: 2,
        padding: 10,
        width: "30%",
    },

    h1: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: 10

    },

    input: {
        backgroundColor: "white",
        width: "100%",
        borderRadius: 40,
        padding: 10
    },

    inputContainer: {
        backgroundColor: "white",
        width: '80%',
        margin: 8,
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: 30,
    },

    icon: {
        background: "red",
        width: "10%",

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