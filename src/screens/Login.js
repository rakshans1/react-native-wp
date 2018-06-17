import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Linking } from 'react-native';

import Images from '@assets/images';
import {auth} from '../services';
import {ENV} from '../config/environment'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  async _handleLogin() {
    const { username, password } = this.state;
    auth.login(username, password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <View style={styles.loginWrap}>
        <View style={styles.loginTop}>
          <Image
          style={styles.logo}
          source={Images.wordpress}
          />
        </View>
        <View style={styles.loginMiddle}>
          <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({username})}
          placeholder="Username"
          placeholderTextColor="#494754"
          underlineColorAndroid="#f1ebfe"
          style={styles.textInput}
          />
          <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#494754"
          underlineColorAndroid="#f1ebfe"
          style={styles.textInput}
          />
          <Button
            onPress={() => this._handleLogin()}
            title="Login"
            color="#4459e4"
            style={styles.loginButton}
          />
          <Text style={styles.forgotText}
            onPress={() => Linking.openURL(`${ENV.API_URL}wp-login.php?action=lostpassword`)}
          >Forgot password?</Text>
        </View>
        <View style={styles.loginBottom}>
          <Text style={styles.loginDha}>Don't have an account?</Text>
          <Text style={styles.loginCreate}>Create</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginWrap: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 150,
  },
  forgotText: {
    textAlign: 'center',
    color: '#818095',
    fontSize: 12,
    fontWeight: '100',
    marginTop: 16
  },
  loginTop: {
    alignSelf: 'center'
  },
  loginMiddle: {
  },
  loginBottom: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textInput: {
    paddingBottom: 16,
    marginBottom: 16
  },
  loginDha: {
    color: '#6b6a7d',
    fontSize: 12,
    fontWeight: '100',
    marginRight: 4
  },
  loginCreate: {
    color: '#838297',
    fontSize: 12,
    fontWeight: '100',
  }
});

export default Login;