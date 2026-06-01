import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <ul>
        <li to="/Home">Home</li>
        <li to="/About">About</li>
        <li to="/Contact">Contact</li>
      </ul>
    </div>
  )
}

export default Home
