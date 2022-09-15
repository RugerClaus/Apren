import React from 'react'
import Navigation from './Navigation'
export default function Header() {
  return (
    <div className='headerWrapper'>
      <header className='header'>
        <h1>APREN</h1>
      </header>
      <Navigation />
    </div>
  )
}