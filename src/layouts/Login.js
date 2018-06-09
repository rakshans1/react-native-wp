import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Linking } from 'react-native';

import Images from '@assets/images';

class Login extends Component {
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
          onChange={(text) => this.setState({username: text})}
          placeholder="Username"
          placeholderTextColor="#494754"
          underlineColorAndroid="#f1ebfe"
          style={styles.textInput}
          />
          <TextInput
          onChange={(text) => this.setState({username: text})}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#494754"
          underlineColorAndroid="#f1ebfe"
          style={styles.textInput}
          />
          <Button
          onPress={(e) => this.handleLogin(e)}
          title="Login"
          color="#4459e4"
          style={styles.loginButton} />
          <Text style={styles.forgotText}
          onPress={() => Linking.openURL('http://google.com')}
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
    padding: 20,
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
    marginTop: 8
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
    marginRight: 8
  }
});

export default Login;