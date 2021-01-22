const baseURL = '/api/climbs/'

export function create(climb) {
  return (
    fetch(baseURL, {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(climb)
    }, {mode: "cors"})
    .then(res => res.json())
  )
}

export function index() {
  return (
    fetch(baseURL, { mode: 'cors' })
    .then(res => res.json())
  )
}