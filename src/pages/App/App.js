import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Signup from '../../pages/Signup/Signup'
import Login from '../../pages/Login/Login'
import Landing from '../../pages/Landing/Landing'
import ClimbList from '../ClimbList/ClimbList'
import AddClimb from '../AddClimb/AddClimb'
import * as authService from '../../services/authService'
import * as usersAPI from '../../services/usersAPI'
import * as climbsAPI from '../../services/climbsAPI'

const boulderGrades = [
  'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16'
]

const sportGrades = [
  '5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10-', '5.10', '5.10+', '5.11-', '5.11', '5.11+', '5.12-', '5.12', '5.12+', '5.13-', '5.13', '5.13+',
  '5.14-', '5.14', '5.14+', '5.15-', '5.15', '5.15+'
]

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [allUsers, setAllUsers] = useState([])
  
  const [climbs, setRoutes] = useState([])

  const handleSignup = async credentials => {
    await authService.signup(credentials)
    await handleLogout()
    await authService.login(credentials)
    setUser(authService.getUser())

    await handleGetAllUsers()
  }

  const handleLogin = async credentials => {
    await authService.login(credentials)
    setUser(authService.getUser())
  }

  const handleLogout = async () => {
    await authService.logout()
  }

  const handleGetAllUsers = async () => {
    const result = await usersAPI.index()
    setAllUsers(result)
  }

  const handleAddClimb = async formData => {
    const newClimb = await climbsAPI.create(formData)
    setRoutes([...climbs, newClimb])
  }

  const handleGetAllClimbs = async () => {
    const allClimbs = await climbsAPI.index()
    setRoutes(allClimbs)
  }

  useEffect(() => {
    handleGetAllUsers()
    handleGetAllClimbs()
  }, [])

  return (
    <div className="App">
      <Navbar user={user} handleLogout={handleLogout} />
      <Route
        exact path="/"
        render={() => <Landing />}
      />
      <Route
        exact path="/signup"
        render={() => <Signup handleSignup={handleSignup}/>}
      />
      <Route
        exact path="/login"
        render={() => <Login handleLogin={handleLogin} />}
      />
      <Route
        exact path="/routes"
        render={() => <ClimbList allUsers={allUsers} climbs={climbs} />}
      />
      <Route
        exact path="/routes/new"
        render={() => <AddClimb user={user} boulderGrades={boulderGrades} sportGrades={sportGrades} handleAddClimb={handleAddClimb} />}
      />
      <p>{user}</p>
    </div>
  );
}

export default App;
