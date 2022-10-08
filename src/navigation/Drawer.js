import React from 'react'
import HomeScreen from '../../Screens/HomeScreen'
import Products from '../../Screens/Products'
import SignUp from '../../Screens/SignUp'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Detail from '../../Screens/Detail';
import SignIn from '../../Screens/SignIn';
import { useSelector, useDispatch } from 'react-redux';
import { loggedTrue } from '../features/loggedSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignOut from '../../Screens/SignOut';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {

  const logged = useSelector((state) => state.logged.loggedState)
  const dispatch = useDispatch()

  const user = AsyncStorage.getItem('user')

  if (user.length > 0) {
    dispatch(loggedTrue())
  }

return (
  <DrawerNavigation.Navigator
  screenOptions={{
  drawerStyle: {
  backgroundColor: 'white',
  width: 250,},}}>

  <DrawerNavigation.Screen name="Home" component={HomeScreen} />
  <DrawerNavigation.Screen name="Products" component={Products} />
    
  </DrawerNavigation.Navigator>
)
}