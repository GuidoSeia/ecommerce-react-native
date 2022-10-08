import React, { useEffect } from 'react'
import { StatusBar } from  'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './src/navigation/Drawer' 
import {Provider} from 'react-redux'
import store from './src/features/store.js'

export default function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer />
      <StatusBar 
        backgroundColor="black"
        barStyle= "light-content"
      />
    </NavigationContainer>
    </Provider>
  )
}