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
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <Navbar />
      <Route
        exact path="/"
        render={() => <Landing />}
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
