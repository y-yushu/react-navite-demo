import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://zh-hans.reactjs.org/logo-og.png'};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    background: '#000000a0',
  },
});

export default App;
