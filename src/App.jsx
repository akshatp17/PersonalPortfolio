import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <TechStack/>
    <div className='flex justify-center items-center'>
      <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default App