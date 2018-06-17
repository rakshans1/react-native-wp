import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native';
import { auth } from '../services';

class Home extends Component {
  logout = () => {
    auth.logout();
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View>
        <Text> {auth.getToken()} </Text>
        <Button onPress={this.logout} title='logout'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default Home;