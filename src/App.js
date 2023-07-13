// import logo from './logo.svg';
import './App.css';
import Reg from './Reg';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Gardenplanning from './Gardenplanning';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>

      <Route exact path="/" element={<Reg/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      <Route exact path="/Reg" element={<Reg/>}></Route>
      <Route exact path="/Navbar" element={<Navbar/>}></Route>
      <Route exact path="/Home" element={<Home/>}></Route>
      <Route exact path="/Gardenplanning" element={<Gardenplanning/>}></Route>
      
    </Routes>
  );
}

export default App;
