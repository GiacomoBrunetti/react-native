import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';


export default class Navbar extends Component {
    render() {
        return (
            <View style={styles.navbar}>
                <Button style={styles.button}
                    title={"Btn1"}
                    onPress={()=>Alert.alert('btn1', 'whecjs')}
                />
                <Button style={styles.button}
                    title={"Btn 2"}
                    onPress={()=>Alert.alert('btn2')}
                />
            </View>
        );
    }
}

const styles = {
  navbar: {
    height: 100,
    backgroundColor: 'steelblue',
    width: 300,
    flexDirection: 'row',
    alignItems: 'center'

  },
  button: {
    height: 150,
    width: 150,
    backgroundColor: 'blue'
  }
}
