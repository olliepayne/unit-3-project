const baseURL = '/api/routes/'

export function create(route) {
  return fetch(baseURL, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(route)
  }, {mode: "cors"})
  .then(res => res.json());
}

export function index() {

}