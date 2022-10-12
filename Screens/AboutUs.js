import {  View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';

export default function AboutUs() {

  const image = {uri:"https://images.pexels.com/photos/9620354/pexels-photo-9620354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
const contactData = [
  {
    _id:1,
    city: "California",
    direction:"3430 W Bayshore Rd, Estados Unidos.",
    phoneNumber: 16504377775,
    email:"thesaltyshopca@gmail.com"
  },
  {
    _id:2,
    city:"Paris",
    direction: "24 Rue de Sèvres, 75007 Paris, Francia",
    phoneNumber: 33144398000,
    email:"thesaltyshopfr@gmail.com"
  },
  {
    _id:3,
    city: "Japan",
    direction: "Chuo City, Tokyo 103-0007, Japan",
    phoneNumber:81356431811,
    email: "thesaltyshopjn@gmail.com"
  },
  {
    _id:4,
    city: "Hong Kong",
    direction: "To Yuen St, Yau Yat Chuen, Hong Kong",
    phoneNumber: 85223951501,
    email: "thesaltyshochp@gmail.com"
  }
]


console.log(
  [0].city)
  return (

    <ImageBackground source={image}>

    <View style={styles.container} >
          <View style={styles.cardContainer} >
            <View style={styles.cardContent}>
            <Text style={styles.title} >About Us</Text>
            <Text style={styles.txt}>We are a company based in Palo Alto, California.
                    We are dedicated to the sale of backpacks, sunglasses, watches and perfumes since 2015, 
                    and since then we have not stopped to maintain the quality of our products and the happiness of our customers</Text>
                    </View>
       </View>

        <View style={styles.cardContainer} >
            
            <View style={styles.cardContent} >
            <Text style={styles.title}>Contact Us</Text>
            <View >
                <TextInput style={styles.input} placeholder={' Email'}   /> 
                </View>
                <View >
                <TextInput style={styles.input}  placeholder={' Subject'}   /> 
                </View>
                <View >
                <TextInput  style={styles.input} placeholder={' Message'}   /> 
                </View>

                <TouchableOpacity >
                        <Text >Send!</Text>
                </TouchableOpacity>
                </View>
                
        </View>

 {/*    <FlatList
          data={contactData}
           keyExtractor={(item) => item._id} 
          renderItem={({item})=> {
            return(
            <View  style={styles.cardContent} >
                    <Text style={styles.title}>{item[0]}</Text>
                    <Text style={styles.txt}>{item[1]}</Text>
                    <Text style={styles.txt}>{item[2]}</Text>
                    <Text style={styles.txt}>{item[3]}</Text>
                    </View>)}
          }

        /> */}

      <View style={styles.cardContainer} >

         
                    <View  style={styles.cardContent} >
                    <Text style={styles.title}>{contactData[0].city}</Text>
                    <Text style={styles.txt}>{contactData[0].direction}</Text>
                    <Text style={styles.txt}>{contactData[0].email}</Text>
                    <Text style={styles.txt}>{contactData[0].phoneNumber}</Text>
                    </View>

                    <View  style={styles.cardContent} >
                    <Text style={styles.title}>{contactData[1].city}</Text>
                    <Text style={styles.txt}>{contactData[1].direction}</Text>
                    <Text style={styles.txt}>{contactData[1].email}</Text>
                    <Text style={styles.txt}>{contactData[1].phoneNumber}</Text>
                    </View>

                    <View  style={styles.cardContent} >
                    <Text style={styles.title}>{contactData[2].city}</Text>
                    <Text style={styles.txt}>{contactData[2].direction}</Text>
                    <Text style={styles.txt}>{contactData[2].email}</Text>
                    <Text style={styles.txt}>{contactData[2].phoneNumber}</Text>
                    </View>

                    <View  style={styles.cardContent} >
                    <Text style={styles.title}>{contactData[3].city}</Text>
                    <Text style={styles.txt}>{contactData[3].direction}</Text>
                    <Text style={styles.txt}>{contactData[3].email}</Text>
                    <Text style={styles.txt}>{contactData[3].phoneNumber}</Text>
                    </View>

        </View> 

    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    

  },

    cardContainer: {
        alignItems: 'center',
        padding: 10,
        color: 'white',
        gap:5,

      },

      cardContent: {
        backgroundColor: `#a9a9a9`,
        color: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 18,
        marginVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 300,
        borderRadius: 20,
        padding:15,
        borderColor: "black"
      },
      title: {
        fontSize: 20,
        margin: 4,
        color: 'white',
        fontWeight: 'bold'
      },
    
    txt: {
      color: 'white'
    },
    input: {
        width:150,
        padding:10,
        color: 'white',
        backgroundColor: 'white',
        borderColor: "black",
        borderRadius:"5",
        marginBottom:10,
        borderWidth: 1
      },
 
  }); 