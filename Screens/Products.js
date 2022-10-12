import { StyleSheet, Text, View, Image, Pressable ,FlatList, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react'
import Card from '../src/components/Card.js'
import { useNavigation } from '@react-navigation/native';
import { useGetAllProductsQuery } from '../src/features/productsApi'

export default function Products() {  

  const navigation = useNavigation(); 


  const { data:allProducts } = useGetAllProductsQuery()

  
  const [filter, setFilter] = useState()
  const products = allProducts?.response
console.log(products)
    function upperCaseOne(search) {
        return search.charAt(0).toUpperCase() + search.slice(1)
    }

    const filterData = products?.filter(item=>item?.type?.includes(filter))

  
  

  return (
    <View style={styles.container}>
      <TextInput placeholder={'Enter product...'} style={styles.input} onChangeText={(value)=> filterData(upperCaseOne(value))} />
      <FlatList style={styles.flatlist} keyExtractor={item => item?._id} data={(filterData.length>0)?filterData:products} renderItem={({ item }) => (
          <Card key={item?._id}>
            <Text key={item?._id} style={styles.text}>{ item?.brand }</Text>
            <Image 
                source={{uri:item?.photo?.[0]}}
                style={styles.image}
            />
            <View style={styles.buttons}>
              <Pressable style={styles.butt}  title={'Details'}><Text style={styles.text}>Add</Text></Pressable>
              <Pressable style={styles.butt}  title={'Details'}><Text onPress={() => navigation.navigate("Products Details", item?._id)}>Details</Text></Pressable>
            </View>                                                    
          </Card>
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
  }, 
  text: {
    fontSize: 25,
    color: "white",
    backgroundColor:"#3f0303",
    width:"100%",
    textAlign: "center",
    margin: 5,
    opacity:.9
    
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
    padding: 8,
    margin: 10,
    width: 200,
    marginTop: 15,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'white'
  },

  logo: {
    marginTop:10
  }
  
})