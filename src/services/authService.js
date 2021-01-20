import * as tokenService from './tokenService'
const baseURL = 'http://localhost:3001/api/auth/'

export function signup(user) {
  return fetch(baseURL + 'signup', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user)
  }, { mode: 'cors' })
  .then(res => res.json())
}