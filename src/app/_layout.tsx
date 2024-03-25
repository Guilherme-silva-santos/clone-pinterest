import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen'

import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  } from "@expo-google-fonts/roboto"
  
  SplashScreen.preventAutoHideAsync()

export default function Layout(){

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
      })
    
      if (fontsLoaded) {
        // caso as fontes não carregarem mantém o user na splash
        console.log('font caregada');
        
        SplashScreen.hideAsync()    
      }

    // o slot pega todas as rotas a aplicação e passa para dentro dele
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' />
          {fontsLoaded && <Slot />}
        </GestureHandlerRootView>
      )
}