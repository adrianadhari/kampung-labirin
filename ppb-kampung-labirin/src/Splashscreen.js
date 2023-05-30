import { View, Text, Image } from 'react-native'
import React from 'react'

const Splashscreen = () => {
  return (
    <View>
      <Image source={require('../assets/img/logo.png')} style={{width: 315, height: 75}}/>
    </View>
  )
}

export default Splashscreen