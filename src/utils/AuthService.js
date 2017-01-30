/**
 * Created by muduna on 1/13/2017.
 */
import Auth0 from 'auth0-js';
import { browserHistory } from 'react-router';

import { isTokenExpired } from './jwtHelper';



export default class AuthService {
  constructor(clientId, domain){
    super();
    this.auth0 = new Auth0({
      clientID: clientId,
      domain: domain,
      responseType: 'token'
    });
    this.login = this.login.bind(this);
  }
  _doAuthentication(authResult) {
    this.setToken(authResult.idToken);
    browserHistory.replace('/getStarted');
  }
  login(params, onError) {
    this.auth0.login(params, onError);
  }
  parseHash(hash) {
    const authResult = this.auth0.parseHash(hash);
    if(authResult && authResult.idToken) {
      this.setToken(authResult.idToken);
    }
  }
  loggedIn() {
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  }
  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }
  getToken() {
    return localStorage.getItem('id_item');
  }
  logout() {
    localStorage.removeItem('id_token');
  }
}