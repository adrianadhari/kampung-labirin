import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from './src/Splashscreen';

export default function App() {
  return (
    <View style={{backgroundColor: '#0C7128', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Splashscreen/>
    </View>
  );
}
