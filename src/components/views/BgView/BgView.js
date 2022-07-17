import React from 'react'
import { View, Text } from 'react-native'
import styles from "./BgView.styles";
const BgView = (props) => {
    const {children, ...otherArgs} = props
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default BgView;