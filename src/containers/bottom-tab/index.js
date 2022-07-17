import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderScreen from "../../screens/orders";
import styles from "./styles";
// import HomeScreen from "../../screens/home";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName='order'
    screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarStyle: styles.tabBarContainer,
      }}
    >
      <Tab.Screen 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={focused? styles.iconView: null}
          >
                <Image 
                source={require("../../assets/images/home.png")}
                style={focused? styles.iconActive :styles.icon}
                />
        </View>
        ),
      }}
      name="home" component={OrderScreen} />
      <Tab.Screen 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={focused? styles.iconView: null}
          >
                <Image 
                source={require("../../assets/images/delivery-man.png")}
                style={focused? styles.iconActive :styles.icon}
                />
        </View>
        ),
      }}
      name="order" component={OrderScreen} 
      />
      <Tab.Screen 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={focused? styles.iconView: null}
          >
                <Image 
                source={require("../../assets/images/knife-and-fork.png")}
                style={focused? styles.iconActive :styles.icon}
                />
        </View>
        ),
      }}
      name="menu" component={OrderScreen} 
      />
      <Tab.Screen 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={focused? styles.iconView: null}
          >
                <Image 
                source={require("../../assets/images/helmet.png")}
                style={focused? styles.iconActive :styles.icon}
                />
        </View>
        ),
      }}
      name="safety" component={OrderScreen} 
      />
      <Tab.Screen 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <View
            style={focused? styles.iconView: null}
          >
                <Image 
                source={require("../../assets/images/user.png")}
                style={focused? styles.iconActive :styles.icon}
                />
        </View>
        ),
      }}
      name="profile" component={OrderScreen} 
      />
    </Tab.Navigator>
  );
}
