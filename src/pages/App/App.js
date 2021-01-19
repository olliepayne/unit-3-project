import './App.css';
import { Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import RouteList from '../RouteList/RouteList'

function App() {
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
    </div>
  );
}

export default App;
