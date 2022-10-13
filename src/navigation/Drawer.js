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
import Welcome from '../../Screens/Welcome'
import AboutUs from '../../Screens/AboutUs'
import ProductsDetails from '../../Screens/ProductsDetails'


const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {

  const logged = useSelector((state) => state.logged.loggedState)

  const user = AsyncStorage.getItem('user')

return (
  <DrawerNavigation.Navigator
  screenOptions={{
  drawerStyle: {
  backgroundColor: 'white',
  width: 250,},}}>

  <DrawerNavigation.Screen options={{
                  drawerItemStyle: { display: 'none' }
  }} name="Welcome" component={HomeScreen} />
  <DrawerNavigation.Screen name="Home" component={Welcome} />
  <DrawerNavigation.Screen name="Products" component={Products} />
  <DrawerNavigation.Screen options={{
                  drawerItemStyle: { display: 'none' }
  }} name="Details" component={ProductsDetails} />
  <DrawerNavigation.Screen name="About us" component={AboutUs} />
  { logged ? <DrawerNavigation.Screen name="Sign out" component={SignOut} /> : <DrawerNavigation.Screen name="Sign in" component={SignIn} />}
  { logged ? null : <DrawerNavigation.Screen name="Sign up" component={SignUp} />}

    
  </DrawerNavigation.Navigator>
)
}