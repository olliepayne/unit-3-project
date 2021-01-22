export function setToken(token) {
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token')
}

export function removeToken() {
  localStorage.removeItem('token')
}

export function getUserFromToken() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split(".")[1])).id : null;
}