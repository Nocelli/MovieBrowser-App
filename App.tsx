import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { Ubuntu_700Bold, Ubuntu_300Light, useFonts } from '@expo-google-fonts/ubuntu'
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo';

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_300Light,
    Roboto_400Regular,
    Roboto_500Medium
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#111' translucent />
      <Routes />
    </>
  )
}
