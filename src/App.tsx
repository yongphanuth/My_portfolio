// import React from 'react'
import Navbar from './components/Navbar'
// import { FaBeer } from 'react-icons/fa';
import Home from './components/Home';
import SocailLinks from './components/SocailLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
const App = () => {
  return (
    <div className=''>
    
      
      
      <Navbar />
      <Home/>
      <About/> 
      <Portfolio/>


      <SocailLinks/>
  
  </div>
  )
}

export default App