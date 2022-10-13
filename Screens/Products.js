import { StyleSheet, Text, View, Image, Pressable ,FlatList, TextInput, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react'
import Card from '../src/components/Card.js'
import { useNavigation } from '@react-navigation/native';
import { useGetAllProductsQuery } from '../src/features/productsApi'
import { useSelector, useDispatch } from "react-redux";

export default function Products() {  

  const navigation = useNavigation(); 

  const logged = useSelector((state) => state.logged.loggedState);

  const { data:allProducts } = useGetAllProductsQuery()

  
  const [filter, setFilter] = useState()
  const products = allProducts?.response
  console.log(products);

    function upperCaseOne(search) {
        return search.charAt(0).toUpperCase() + search.slice(1)
    }

    const filterData = products?.filter(item=>item?.brand?.includes(filter))

  return (
    <View style={styles.container}>
      <TextInput placeholder={'Search product'} style={styles.input} onChangeText={(search)=> setFilter(upperCaseOne(search))} />
      <FlatList style={styles.flatlist} keyExtractor={item => item?._id} data={filterData?.length > 0 ? filterData : products} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item?._id)}>
          <Card key={item?._id}>
            <Text key={item?._id} style={styles.text}>{ item?.brand }</Text>
            <Image 
                source={{uri:item?.photo?.[0]}}
                style={styles.image}
            />
            {logged ? <View style={styles.buttons}>
              <Pressable style={styles.butt}  title={'Add to cart'}><Text style={styles.text}>Add to cart</Text></Pressable> 
            </View> : <Text>Log in to buy!</Text> }                                         
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  image: {
    width: 300,
    height: 250,
    resizeMode: "cover",
    marginVertical: 10
  }, 
  text: {
    fontSize: 25,
    color: "white",
    backgroundColor:"#3f0303",
    width:"100%",
    textAlign: "center",
    margin: 5,
    opacity:.9,
    padding: 5,
    borderRadius: 10
  },
  buttons: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 15,
    margin: 10,
    width: 200,
    marginTop: 15,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white'
  },
  butt: {
    borderRadius: 10
  },
  logo: {
    marginTop:10
  }
  
})