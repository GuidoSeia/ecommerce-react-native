import { StyleSheet, View, Text, Button, TextInput, Image, Animated } from 'react-native'
import React from 'react'
import {useGetProductQuery} from "../src/features/productsApi"
import { useNavigation } from '@react-navigation/native';
import { addToCart, removeCart, decrementQuantity, newOrder } from '../src/features/cartSlice'
import {useState, useRef} from "react"
import { useSelector, useDispatch } from "react-redux";

export default function ProductsDetails({ route}) {
const navigation = useNavigation(); 

const logged = useSelector((state) => state.logged.loggedState);

const dispatch = useDispatch()

const {data:product} = useGetProductQuery(route.params)
const dataProduct = product?.response

const cart = useSelector((state) => state.cart.cart)

const scrollX = useRef(new Animated.Value(0)).current; 

  return (
<View style={styles.container}>

    <View style={styles.cardContainer}>
      <Text style={styles.text}> {dataProduct?.brand} </Text>
    </View>

    <Animated.FlatList
    onScroll={Animated.event(
      [{nativeEvent: { contentOffset: { x: scrollX}
      }}], { useNativeDriver: true })}
        data={dataProduct?.photo}
        horizontal={true}
        style={styles.flatlist}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval = {200}
        pagingEnabled={true}
        scrollEnabled={true}
        scrollEventThrottle={16}
        keyExtractor={(item) => item?._id} 
        renderItem={({ item }) => {
          return (
          <Animated.View style={{
            width:450,
            height: 250,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <Image 
                source={{uri:item}}
                style={styles.image}
            />
          </Animated.View>)  
            
        }}
    />

    <View style={{display: 'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <Text style={styles.textDescription}>{dataProduct?.description}</Text>
    <View style={{display: 'flex', justifyContent:'center',alignItems:'center', gap: 10}}>
      <Text style={styles.textPrice}>Price: ${dataProduct?.price}</Text>
      <Text style={styles.textPrice}>Stock: ${dataProduct?.stock}</Text>
    </View>

    <View style={styles.buttons}>
      <Button style={styles.butt}
            title={"Add to Cart"}
            onPress={() => {
              dispatch(addToCart(dataProduct))
              console.log(cart);
            }}
            />

            <Button style={styles.butt}
            title={"Go back to All Products"}
            onPress={() => navigation.navigate("Products")}
            /> 

            </View>
      </View>
</View>

  )
}

const styles = StyleSheet.create({
  cardContainer: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    color: 'white',
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "cover",
    borderRadius: 20
  }, 
  text: {
    width:"80%",
    textAlign: "center",
    opacity:.9,
    fontSize: 30,
    marginTop: 25
  },
  buttons: {
    display: 'flex',
    justifyContent:  "center",
    alignItems: 'center',
    gap: 10,
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
  textPrice: {
    fontSize: 30,
    fontFamily: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(180, 180, 180)'
  },
  textDescription: {
    marginBottom:30,
    width:"80%",
    textAlign: "center",
    opacity:.9,
    fontSize: 20
  }

})