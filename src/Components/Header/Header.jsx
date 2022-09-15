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

  
  function english(text) { //defines a function to translate to english
    text[0].innerHTML = 'Resource Conservation Agency'
    text[1].innerHTML = 'Resource Protection Agency'
  }
  function spanish(text) { //defines a function to translate to spanish
    text[0].innerHTML = 'Agencia de Conservación de Recursos'
    text[1].innerHTML = 'Agencia para la protección de los recursos'
  }
  function german(text) { //defines a function to translate to deutsch
    text[0].innerHTML = 'Agentur für Ressourcenshutz'
    text[1].innerHTML = 'Agencia para la protección de los recursos'
  }
  function language(lang) {
  var missionStatement = document.querySelectorAll('.missionStatement')
  if (lang == 'en') {
    english(missionStatement)
  }
  if (lang == 'es') {
    spanish(missionStatement)
  }
  if (lang == 'de') {
    german(missionStatement)
  }
}
  return (
    <header className='header'>
      <h1>APREN</h1>
      <ul className="language">
        <button className='languageSelection' onClick={language('en')}>English</button>
        <button className='languageSelection' onClick={language('de')}>Deutsch</button>
        <button className='languageSelection' onClick={language('es')}>Español</button>
      </ul>
      <ul className='missionStatementWrapper'>
        <li className='missionStatement'>Agentur für Ressourcenshutz</li>
        <li className='missionStatement'>Agencia para la protección de los recursos naturales</li>
      </ul>
      <Navigation />
    </header>
  )
}