import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import { auth } from '../services';

class Home extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => auth.logout()}> {auth.getToken()} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default Home;