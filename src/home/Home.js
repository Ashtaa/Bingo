import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div className='home-container'>
      <div className='home-links'>
        <Link to='/' className='home-link'>Home</Link>
        <Link to='/admin' className='home-link'>Admin</Link>
        <Link to='/cards' className='home-link'>Player</Link>
      </div>
    </div>
  )
}

export default Home
