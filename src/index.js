import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationContainer from "./navigation";
// import HomeScreen from "../../screens/home";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer />
  );
}
