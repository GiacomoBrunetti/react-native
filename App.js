import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,  } from 'react-native';
import Navbar from './Navbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Navbar style={styles.nav}>
      </Navbar>
        <View style={styles.main}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
        <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
        </View>
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
  nav: {
  },
  main: {
    flex: 9
  },
  text: {
    flex: 3,
    color: 'white'
  }
});
