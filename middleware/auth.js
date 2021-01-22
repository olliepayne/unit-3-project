function auth(req, res, next) {
  console.log('hi' + localStorage.getItem('token'))
  if(!localStorage.getItem('token')) return
  next()
}

module.exports = auth