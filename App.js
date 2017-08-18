import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,  } from 'react-native';
import Navbar from './Navbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
        <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
