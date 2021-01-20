import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Login from '../../pages/Login/Login'
import Landing from '../../pages/Landing/Landing'
import RouteList from '../RouteList/RouteList'
import AddRoute from '../AddRoute/AddRoute'
import * as authService from '../../services/authService'


function App() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async (credentials) => {
    setUser(authService.login(credentials))
  }

  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn}/>
      <Route
        exact path="/"
        render={() => <Landing />}
      />
      <Route
        exact path="/login"
        render={() => <Login handleLogin={handleLogin}/>}
      />
      <Route
        exact path="/routes"
        render={() => <RouteList />}
      />
      <Route
        exact path="/routes/new"
        render={() => <AddRoute />}
      />
    </div>
  );
}

export default App;
