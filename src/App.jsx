import './CSS/App.css'
import Header from './Components/Header/Header'
import { Route,Routes } from 'react-router'
import Home from './Components/Body/Home'
import About from './Components/Body/About'
import Services from './Components/Body/Services'
import Outreach from './Components/Body/Outreach'
import Clients from './Components/Body/Clients'
import Contact from './Components/Body/Contact'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Outreach' element={<Outreach />}/>
        <Route path='/Clients' element={<Clients />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}
