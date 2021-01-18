import './App.css';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route
        exact path="/"
      />
    </div>
  );
}

export default App;
