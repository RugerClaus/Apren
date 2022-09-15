import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (

    <nav className='nav'>
      <ul>
        <Link  to='/' className='navItem'>Home</Link>
        <Link  to='/About' className='navItem'> About Us</Link>
        <Link to='/Services' className='navItem'>Our Services</Link>
        <Link  to='/Outreach' className='navItem'>Outreach</Link>
        <Link to='/Clients' className='navItem'>Clients & Partners</Link>
        <Link  to='/Contact' className='navItem'>Contact Us</Link>
      </ul>
    </nav>
  )
}