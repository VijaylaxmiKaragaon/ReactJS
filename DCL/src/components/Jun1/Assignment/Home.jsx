import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Home
