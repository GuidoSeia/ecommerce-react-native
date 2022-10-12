import { StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native'
import React from 'react'
import {useGetProductQuery} from "../src/features/productsApi"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"

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
<View>

    <View>
    <TextInput placeholder={'Enter the type that you are looking...'}  onChangeText={(value)=> filterData(upperCaseOne(value))} />
</View>

    <View>
    <Text> {dataProduct?.brand} </Text>
    </View>

    <View>
    <FlatList

    />
    </View>

    <View>
    <Text>{dataProduct?.description}</Text>
    </View>
    <View>
    <Text>${dataProduct?.price}</Text>
    </View>

            <Button
             title={"Go back to All Products"}
            onPress={() => navigation.navigate("Products")}
            /> 

            <Button
             title={"Add to Cart"}
            /> 
</View>

  )
}