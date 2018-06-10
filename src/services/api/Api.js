import { ENV } from '../../config/environment';


/**
 * Api class in which uses fetch as http handler
 *
 * @class Api
 */
class Api {
  constructor() {
    this.apiUrl = ENV.API_URL + 'wp-json/';
  }
  /**
   *
   *
   * @param {any} { iswp, url, params, options }
   * @returns promise
   * @memberof Api
   */
  get({ iswp, url, params, options }) {
    const defaultOptions = {
      method: 'GET',
    };
    const init = { ...defaultOptions, ...options };
    let Url = url;
    return new Promise((resolve, reject) => {
      if (iswp) {
        Url = this.apiUrl  + url;
      }
      Url = new URL(url);
      if (params) {
        Object.keys(params).forEach(key =>
          Url.searchParams.append(key, params[key]),
        );
      }
      fetch(Url, init)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          reject(res);
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }
  /**
   *
   *
   * @param {any} { iswp, url, options, data }
   * @returns promise
   * @memberof Api
   */
  post({ iswp, url, options, data }) {
    const defaultOptions = {
      method: 'POST',
      body: data,
    };
    const init = { ...defaultOptions, ...options };
    let Url = url;
    return new Promise((resolve, reject) => {
      if (iswp) {
        Url = this.apiUrl + url;
      }
      fetch(Url, init)
        .then(async res => {
          if (res.ok) {
            return res.json();
          }
          reject(await res.json());
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  }
}

export default new Api();
