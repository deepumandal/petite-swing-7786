import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Route,  Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path={'/'} element={ <Home /> } />
    </Routes>
   
    
    </div>
  );
}

export default App;
