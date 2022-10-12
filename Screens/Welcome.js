import { View, Button, StyleSheet, Image, Text } from 'react-native'
import React from 'react'
import { useGetFilteredProductsQuery, useGetAllProductsQuery } from '../src/features/productsApi'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {
  const navigation = useNavigation();
  let {data: allproducts} = useGetAllProductsQuery()
 let dataAllProducts= allproducts?.response
 let types=[]
 dataAllProducts?.map((item)=>{
  if (!types?.includes(item?.type)) {
    types.push(item?.type)
  }
}) 
console.log(types)

console.log(dataAllProducts)

  let { data: watches } = useGetFilteredProductsQuery("reloj")
  const dataWatches =watches

  let { data: sunglasses } = useGetFilteredProductsQuery("anteojos")
  const dataSunglasses =sunglasses?.response.map(item=>([item?._id, item.type, item.image]))

  let { data: backpack } = useGetFilteredProductsQuery("mochilas")
  let dataBackpack = backpack?.response.map(item=>([item?._id, item.type, item.image]))

  let { data: wallet } = useGetFilteredProductsQuery("billetera")
  let dataWallet = wallet?.response.map(item=>([item?._id, item.type, item.image]))


  let { data: handbag } = useGetFilteredProductsQuery("bolsos")
  let dataHandbag = handbag?.response.map(item=>([item?._id, item.type, item.image]))


  let { data: fragrance } = useGetFilteredProductsQuery("perfume") 
  let datafragrance = fragrance?.response.map(item=>([item?._id, item.type, item.image]))



  const data = [
    {
        id: 1,
        title: "Watches",
        description: "descripcion producto",
        image: "https://www.woodenson.cl/wp-content/uploads/sites/2/2021/10/DSC_0127-600x600.jpg",
        type: "Offer"
    },
    {
        id: 1,
        title: "Sunglasses",
        description: "descripcion producto",
        image: "https://cdn.shopify.com/s/files/1/0270/6663/0217/products/711426.jpg?v=1634050720",
        type: "New"
    },
    {
        id: 1,
        title: "Backpacks",
        description: "descripcion producto",
        image: "https://i0.wp.com/chevyproductos.cl/wp-content/uploads/mochila-rolltop-40-lt-negra.jpg?resize=400%2C400&ssl=1",
        type: "Latest"
    },
]



  
  return (
<View>
<FlatList
data={data}
snapToInterval={300}
horizontal={true}
showsHorizontalScrollIndicator={false}
contentContainerStyle={{ paddingTop: 100, paddingHorizontal: 50 }}
keyExtractor={(item) => item._id}
renderItem={({ item }) => {
  return (
    <View>
    <Text  style={styles.h2}> {item.title} </Text>
    <Image
    style={styles.image}
    source={{ uri: item[3] }}
    />
    <Button
     onPress={() => navigation.navigate("Products" )}
     title={"See more"}
    />
    </View>
    )
}}

/>
</View>
  

  
  )
}

const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 30,
  },
  h2: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    padding: 5,
    fontWeight: 'bold'
  },
  carousel: {
    width: 230,
    justifyContent: 'center'
  },
  cities: {
    backgroundColor: '#8C4F2B'
  },
  productType: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 5,
    backgroundColor: '#73B1BF',
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 20
  }
})