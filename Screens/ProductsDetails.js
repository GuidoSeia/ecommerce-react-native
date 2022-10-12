import { StyleSheet, View, Text, Button, TextInput, Image } from 'react-native'
import React from 'react'
import {useGetProductQuery} from "../src/features/productsApi"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import { FlatList } from 'react-native-gesture-handler';

export default function ProductsDetails({ route}) {
const navigation = useNavigation(); 

const {data:product} = useGetProductQuery(route.params)
const dataProduct = product?.response

const [filter, setFilter] = useState()

function upperCaseOne(search) {
    return search.charAt(0).toUpperCase() + search.slice(1)
}

const filterData = (e) => {
    e.preventDefault()
    setFilter(upperCaseOne(e.target.value));
}

function upperCaseOne(value){
  return value.charAt(0).toUpperCase() + value.slice(1)
}
console.log(dataProduct)
  return (
<View style={styles.container}>

    <View>
      <TextInput style={styles.input} placeholder={'Enter the type that you are looking...'}  onChangeText={(value)=> filterData(upperCaseOne(value))} />
    </View>
    <View style={styles.cardContainer}>
    <Text style={styles.text}> {dataProduct?.brand} </Text>
    </View>

    <View>
      <FlatList
data={dataProduct}
keyExtractor={(item) => item._id}
renderItem={({item})=>{
  <Image

  style={styles.image}
  source={{ uri: (item.photo) }}

/>
}}
      />
    
    </View>

    <View>
    <Text style={styles.text}>{dataProduct?.description}</Text>
    </View>
    <View>
    <Text style={styles.text}>${dataProduct?.price}</Text>
    </View>

    <View style={styles.buttons}>
            <Button style={styles.butt}
             title={"Go back to All Products"}
            onPress={() => navigation.navigate("Products")}
            /> 

            <Button style={styles.butt}
             title={"Add to Cart"}
            /> 
            </View>
</View>

  )
}

const styles = StyleSheet.create({
  cardContainer: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    color: 'white',
    gap:5,
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "cover",
  }, 
  text: {
    width:"80%",
    textAlign: "center",
    margin: 5,
    opacity:.9
    
  },
  buttons: {
    display: 'flex',
    justifyContent:  "space-between",
    height: 150,
    marginBottom: 10,
    width: '100%',
    padding:15
  },
  butt:{
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    margin: 10,
    width: 200,
    marginTop: 15,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white'
  },

  
})