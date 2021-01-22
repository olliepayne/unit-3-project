const baseURL = '/api/users/'

export function index() {
  return (
    fetch(baseURL, { mode: 'cors' })
    .then(res => res.json())
  )
}