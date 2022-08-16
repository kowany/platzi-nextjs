import React from 'react'
import Navbar from '../components/Navbar/navbar'
// Nextjs hace routing basado en el file system
const About = () => {
  return (
    <div>
      <Navbar/>
      <p>Esta es la página de about</p>
    </div>
  )
}

export default About
