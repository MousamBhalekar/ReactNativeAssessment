import { View, Text } from 'react-native'
import React from 'react'
import styles from './NavHeader.styles'
import {NavButton} from "../../buttons"
const NavHeader = (props) => {
  return (
    <View style={styles.container}>
        <NavButton
         src={require("../../../assets/images/left-arrow.png")}
         onFuncPassed={props.onFuncPassed}
        />
        <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default NavHeader