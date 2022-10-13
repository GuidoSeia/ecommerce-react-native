import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native'
import React from 'react'
import { addToCart, removeCart, decrementQuantity, newOrder } from '../src/features/cartSlice'
import { useSelector, useDispatch } from "react-redux";
import Card from '../src/components/Card'

export default function Cart() {

    const cart = useSelector((state) => state.cart.cart)

    const dispatch = useDispatch()

return (
    <View style={styles.container}>
    <View style={{display: 'flex', justifyContent:'center',alignItems:'center', gap: 10, width:'100%'}}>
        <Text style={styles.textCart}>
            My Cart 
        </Text>
        <View style={{marginBottom: 13,}}>
        <Button 
        color= '#3f0303'
        title='Proceed checkout' />
        </View>
    </View>
    <View style={styles.containerFlatlist}>
    <FlatList style={styles.flatlist} keyExtractor={item => item?._id} data={cart} renderItem={({ item }) => (
        <Card key={item?._id} style={styles.cardCart}>
            <Text key={item?._id} style={styles.text}>{ item?.brand }</Text>
            <Image 
                source={{uri:item?.photo?.[0]}}
                style={styles.image}
            />
            <View style={{display: 'flex', justifyContent:'start',alignItems:'start',gap: 10, width:'100%'}}>
            
            <Text style={styles.textPrice}>Price:   ${item?.price}</Text>
            <Text style={styles.textPrice}>Quantity:   {item?.quantity}</Text>
            </View>
            <View style={styles.divButton}>
            <Button 
            color= '#3f0303'
            title={"+"}
            onPress={() => {
                dispatch(addToCart(item))
                console.log(cart);
              }}
            />

            <Button style={styles.butt}
            color= '#3f0303'
            title={"-"}
            onPress={() => dispatch(decrementQuantity(item))}
            />   
            
            </View>                                  
        </Card>

    )} />
    </View>
    <Button color= '#3f0303' title='Empty cart' onPress={() => dispatch(removeCart())} />
    </View>
)
}

  const styles = StyleSheet.create({
    container: {
        boxSizing: 'border-box',
        margin: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
      width: 300,
      height: 250,
      resizeMode: "cover",
      borderRadius: 20,
      marginBottom: 10
    }, 
    text: {
      width:"80%",
      textAlign: "center",
      opacity:.9,
      fontSize: 30,
      marginVertical: 25,
      fontWeight: 'bold'
    },
    textCart: {
      width:"60%",
      textAlign: "center",
      opacity:.9,
      fontSize: 30,
      marginVertical: 25,
      borderBottomColor: 'black',
      borderBottomWidth: 2
      
    },
    containerFlatlist: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
    },
    cardCart: {
      margin: 20, 
      width: "70%"
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
    flatlist:{
      display: 'flex',
      width: '80%'
    },

    divButton: {
      display: 'flex', 
      justifyContent:'center',
      flexDirection: 'row' ,
      alignItems:'center', 
      width: '20%',
      backgroundColor: '#3f0303',
      borderRadius: 10,
      marginTop:10,

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
      fontFamily: 'bold',
      textAlign: 'start',
      
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