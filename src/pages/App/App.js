import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
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
