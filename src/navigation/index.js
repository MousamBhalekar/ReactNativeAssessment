import React from 'react';
import {StatusBar} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '../containers/bottom-tab';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <MyTabs/>
    </NavigationContainer>
  );
}