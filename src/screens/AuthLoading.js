import React, { Component } from 'react'
import { Text, View , AsyncStorage } from 'react-native'
import { auth } from '../services'

export class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  async _bootstrapAsync() {
    const isAuthenticated = await auth.isAuthenticated();
    this.props.navigation.navigate(isAuthenticated ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}

export default AuthLoading