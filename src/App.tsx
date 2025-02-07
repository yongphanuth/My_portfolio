// import React from 'react'
import Navbar from './components/Navbar'
// import { FaBeer } from 'react-icons/fa';
import Home from './components/Home';
import SocailLinks from './components/SocailLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
const App = () => {
  return (
    <div className=''>
    
      
      
      <Navbar />
      <Home/>
      <About/> 
      <Portfolio/>
      <Experience/>
      <Education/>
      <SocailLinks/>
  
  </div>
  )
}

export default App