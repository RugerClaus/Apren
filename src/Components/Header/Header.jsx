import React from 'react'
import Navigation from './Navigation'

export default function Header() {
  // The following three functions 
  //return languages in the Header 
  //of the document. This is a prototype
  //for later in which the whole
  //page will be translated
  //these used to be defined 
  //by ".motto"

  var missionStatement = document.querySelectorAll('.missionStatement')
  function english() { //defines a function to translate to english
    missionStatement[0].innerHTML = 'Resource Conservation Agency'
    missionStatement[1].innerHTML = 'Resource Protection Agency'
  }
  function spanish() { //defines a function to translate to spanish
    missionStatement[0].innerHTML = 'Agencia de Conservación de Recursos'
    missionStatement[1].innerHTML = 'Agencia para la protección de los recursos'
  }
  function german() { //defines a function to translate to deutsch
    missionStatement[0].innerHTML = 'Agentur für Ressourcenshutz'
    missionStatement[1].innerHTML = 'Agencia para la protección de los recursos'
  }
  
  return (
    <header className='header'>
      <h1>APREN</h1>
      <ul className="language">
        <button className='languageSelection' onClick={english}>English</button>
        <button className='languageSelection' onClick={german}>Deutsch</button>
        <button className='languageSelection' onClick={spanish}>Español</button>
      </ul>
      <ul className='missionStatementWrapper'>
        <li className='missionStatement'>Agentur für Ressourcenshutz</li>
        <li className='missionStatement'>Agencia para la protección de los recursos naturales</li>
      </ul>
      <Navigation />
    </header>
  )
}