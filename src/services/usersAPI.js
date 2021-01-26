const baseURL = '/api/users/'

export function index() {
  return (
    fetch(baseURL, { mode: 'cors' })
    .then(res => res.json())
  )
}

export function getOne(id) {
  return (
    fetch(baseURL + id, { mode: 'cors' })
    .then(res => res.json())
  )
}