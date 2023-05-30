import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
        <ImageBackground source={require('../assets/img/background-home.png')} resizeMode="cover" style={{flex: 1}}>
            <Text>tes</Text>
        </ImageBackground>
    </View>
    
  )
}

export default Home