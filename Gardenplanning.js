import React from 'react'
import './Gardenplanning.css';
// import Navbar from './Navbar';
function Home() {
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
    <a href="#" class="logo">HomeGarden</a>
    <nav class="nav-items">
      <a href="Home">Home</a>
      <a href="#">Season</a>
      <a href="Reg">Remainder</a>
      <a href="Reg">Garden Journal</a>
      <a href="#">About</a>
      <a href="#">Contact</a> 
      <a href="login">Login</a>
      <a href="reg">Register</a>
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Welcome to the World of Garden </h1>
      <p></p>
      <button>Explore</button>
    </div>
    <div class="about-me">
    </div>
    </main>
  
  </div>
)
}

export default Home