import * as tokenService from './tokenService'
const baseURL = '/api/auth/'

export function signup(credentials) {
  return fetch(baseURL + 'signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(credentials)
  }, { mode: 'cors' })
  .then(res => res.json())
}

export function login(credentials) {
  return fetch(baseURL + 'login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(credentials)
  })
  .then(res => {
    if(res.ok) return res.json()
    throw new Error('Bad Credentials')
  })
  .then(({ token }) => tokenService.setToken(token))
}

export function getUserID() {
  return tokenService.getUserIDFromToken()
}

export function logout() {
  tokenService.removeToken()
}