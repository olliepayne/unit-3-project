const baseURL = '/users/'

export function getUserFromID(id) {
  return (
    fetch(baseURL + id, {
      method: 'GET',
      id
    }, { mode: 'cors' })
    .then(res => res.json())
  )
}