import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Login from '../../pages/Login/Login'
import Landing from '../../pages/Landing/Landing'
import ClimbList from '../ClimbList/ClimbList'
import AddClimb from '../AddClimb/AddClimb'
import * as authService from '../../services/authService'
import * as climbsAPI from '../../services/climbsAPI'

function App() {
  const [userID, setUserID] = useState('')

  const [routes, setRoutes] = useState([])

  const handleLogin = async credentials => {
    await authService.login(credentials)
    handleGetUser()
  }

  const handleGetUser = async () => {
    const token = await authService.getUser()
    setUserID(token.id)
  }

  const handleLogout = async () => {
    await authService.logout()
    setUserID(undefined)
  }

  const handleAddClimb = async formData => {
    const newRoute = await climbsAPI.create(formData)
    setRoutes([...routes, newRoute])
  }

  const handleGetAllClimbs = async () => {
    const allRoutes = await climbsAPI.index()
    console.log(`Climbs: ${allRoutes}`)
    setRoutes(allRoutes)
  }

  useEffect(() => {
    handleGetAllClimbs()
  }, [])

  return (
    <div className="App">
      <Navbar userID={userID}/>
      <Route
        exact path="/"
        render={() => <Landing />}
      />
      <Route
        exact path="/login"
        render={() => <Login handleLogin={handleLogin} />}
      />
      <Route
        exact path="/routes"
        render={() => <ClimbList routes={routes} />}
      />
      <Route
        exact path="/routes/new"
        render={() => <AddClimb handleAddClimb={handleAddClimb} />}
      />
    </div>
  );
}

export default App;
