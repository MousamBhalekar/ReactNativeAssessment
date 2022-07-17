import React from 'react';
import {
    StyleSheet,
  } from 'react-native';
  import {PRIMARY} from "../../styles/colors";
const styles = StyleSheet.create({
    tabBarContainer: {
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      height:60,
    },
    iconView: {
      borderWidth:2,
      borderColor:PRIMARY,
      borderRadius:40,
      justifyContent:"center",
      alignItems:"center",
      padding:8,
    },
    icon: {
      width:20,
      height:20,
      tintColor:"grey"
    },
    iconActive: {
      width:20,
      height:20,
      tintColor:PRIMARY
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default styles;