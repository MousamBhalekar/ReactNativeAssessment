import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import styles from "./NavButton.styles";
const NavButton = (props) => {
    const {children, ...otherArgs} = props
  return (
    <TouchableOpacity 
    onPress={props.onFuncPassed}
    style={styles.container}>
        <Image 
        source={props.src}
        style={styles.icon}
        />
    </TouchableOpacity>
  )
}

export default NavButton;