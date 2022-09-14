import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='nav'>
      <ul>
        <Link className="navItem" to='/' className='navItem'>Home</Link>
        <Link className="navItem" to='/About' className='navItem'>About Us</Link>
        <Link className="navItem" to='/Services' className='navItem'>Our Services</Link>
        <Link className="navItem" to='/Outreach' className='navItem'>Outreach</Link>
        <Link className="navItem" to='/Clients' className='navItem'>Clients & Partners</Link>
        <Link className="navItem" to='/Contact' className='navItem'>Contact Us</Link>
      </ul>
    </nav>
  )
}