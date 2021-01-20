const baseURL = 'http://localhost:3001/api/routes/'

export function create(route) {
  return fetch(baseURL, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(route)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function index() {

}