import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import Home from './src/telas/Home';
import mock from './src/mocks/cesta';
import Sacolao from './src/telas/sacolao';
import Imagens from './src/telas/imagens';

function MenuCesta() {
  return (
    <SafeAreaView>
      <Home {...mock} />
      <StatusBar />
    </SafeAreaView>
  );
}


const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: '#0000' }}
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "black" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused
              ? 'chatbubble-ellipses'
              : 'chatbubble-ellipses-outline';
          } else if (route.name === 'Catalogo') {
            iconName = focused
              ? 'shirt'
              : 'shirt-outline';
          } else if (route.name === 'Contato') {
            iconName = focused
              ? 'chatbubble'
              : 'chatbubble-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',

      })}

    >
      <Tab.Screen name="Home" component={MenuCesta}  />
      <Tab.Screen name="Sobre" component={Sacolao} />
      <Tab.Screen name="Catalogo" component={Imagens} />
      <Tab.Screen name="Contato" component={Imagens} />
    </Tab.Navigator>

  );
}

export default function App() {

  //Fonte utilizada para o projeto
  const [fonteCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  //Checa se as fontes já foram carregadas antes de exibir no APP
  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu />
    </NavigationContainer>
  );
}
