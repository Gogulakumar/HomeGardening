// import logo from './logo.svg';
import './App.css';
import Reg from './Reg';
import Login from './Login';
import Navbar from './Navbar';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>

      <Route exact path="/" element={<Reg/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      <Route exact path="/Reg" element={<Reg/>}></Route>
      <Route exact path="/Navbar" element={<Navbar/>}></Route>

    </Routes>
  );
}

export default App;
