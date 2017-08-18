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
    height: 70,
    backgroundColor: 'steelblue',
    width: 378,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'

  },
  button: {
    height: 100,
    width: 200,
    padding: 50,
    verticalAlign: 'bottom',
    paddingBottom: 0
  }
}
