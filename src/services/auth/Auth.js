import { AsyncStorage } from 'react-native';
import { api } from '../index'

class Auth {
  _token = null;

  login(username, password) {
    return new Promise(async (resolve, reject) => {

      const loginData = {
        username,
        password
      }
      try {
        const res = await api.post('/token', loginData);
        this._token = res.token;
        await AsyncStorage.setItem("auth", JSON.stringify(res));
        resolve(true);
      } catch (e) {
        reject(e);
      }
    })
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