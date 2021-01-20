import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Login from '../../pages/Login/Login'
import Landing from '../../pages/Landing/Landing'
import RouteList from '../RouteList/RouteList'
import AddRoute from '../AddRoute/AddRoute'
import * as authService from '../../services/authService'
import * as routesAPI from '../../services/routesAPI'

function App() {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [routes, setRoutes] = useState([])

  const handleLogin = async (credentials) => {
    
  }

  const handleAddRoute = async formData => {
    const newRoute = await routesAPI.create(formData)
    setRoutes([...routes, newRoute])
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
        render={() => <RouteList routes={routes}/>}
      />
      <Route
        exact path="/routes/new"
        render={() => <AddRoute handleAddRoute={handleAddRoute}/>}
      />
    </div>
  );
}

export default App;
