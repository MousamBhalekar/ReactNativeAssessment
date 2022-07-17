import React from 'react'
import { StyleSheet } from 'react-native'
import { PRIMARY } from '../../../styles/colors';
const styles = StyleSheet.create({
    container: {
      backgroundColor:"#FFF",
      padding:12,
      borderRadius:30,
      elevation:10,
      shadowColor:PRIMARY,
      justifyContent:"center",
      alignItems:"center",
    },
    icon: {
        width:15,
        height:15,
        resizeMode:"contain",
        tintColor:PRIMARY,
    },
})
export default styles;