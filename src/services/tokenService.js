export function setToken(token) {
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token')
}

export function getUserFromToken() {
  const token = getToken()
  // console.log(token)
  // console.log(atob(token.split(".")[1]))
  return token ? JSON.parse(atob(token.split(".")[1])) : null;
}