import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Appnavigation from './src/navigation/Appnavigation'
import CustomStatusBar from './src/customstatusbar'

const App = () => {
  
  return (
 
 
    <>
    <CustomStatusBar/>
    <Appnavigation/>
    </>
  
  )
}

export default App