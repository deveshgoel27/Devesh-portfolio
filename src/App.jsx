import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App