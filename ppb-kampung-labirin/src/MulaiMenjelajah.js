import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const MulaiMenjelajah = () => {
  return (
    <ScrollView>
      <View>
        <Image style={styles.gambar} source={require('../assets/img/kampung-labirin-4.jpg')}/>
    </View>
    <View style={styles.container2}>
      <Text style={styles.font1}>Jelajah Beragam</Text>
      <Text style={styles.font1}>Keindahan</Text>
      <Text style={styles.font1}>Kampung Labirin</Text>
      <Text style={styles.font2}>Kamu bisa menjelajah dengan bebas, dan cari keberagaman keindahan wisata kampung labirin</Text>

      <View style={{marginTop: 20, width: 300, backgroundColor: '#0C7128', borderRadius: 50, alignItems: 'center'}}>
        <Text style={{padding: 20, color: 'white', fontSize: 16}}>Mulai Menjelajah</Text>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    gambar: {
      width: 391,
      height: 400,
    },
    container2: {
      alignItems: 'center',
      marginTop: 15,
      shadowColor: 'white',
      shadowOffset: {width: 10, height: -60},
      shadowRadius: 100
    },
    font1: {
      fontWeight: 'bold',
      fontSize: 26
    },
    font2: {
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 100,
      color: '#9D9797',
    }
  });
export default MulaiMenjelajah