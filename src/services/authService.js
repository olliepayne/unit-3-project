import * as tokenService from './tokenService'
const baseURL = '/api/auth/'

export function signup() {

}

export function login(credentials) {
  return fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(credentials)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}