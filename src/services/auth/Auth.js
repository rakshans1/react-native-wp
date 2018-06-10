import { AsyncStorage } from 'react-native';
import { api } from '../index'

class Auth {
  _token = null;

  async login(username, password) {
    const loginData = new FormData();
    loginData.append('username', username);
    loginData.append('password', password);
    try {
      const res = await api.post({iswp: true, url: '/token', data: loginData});
      this._token = res.token;
      await AsyncStorage.setItem("auth", JSON.stringify(res));
    } catch (e) {
      console.log(e);
    }
  }

  isAuthenticated() {
    return new Promise(async (resolve) => {
      try {
        let userToken = await AsyncStorage.getItem('auth');
        userToken = JSON.parse(userToken);
        this._token = userToken.token;
        resolve(true)
      } catch (e) {
        resolve(false)
      }
    })
  }

  getToken() {
    return this._token;
  }

  async logout() {
    this._token = null;
    await AsyncStorage.clear();
  }

}


export default new Auth();