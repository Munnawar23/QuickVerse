import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Campuses from './Sections/Campuses'
import Reviews from './Sections/Reviews'
import Services from './Sections/Services'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <main className='text-neutral-800 overflow-x-hidden antialiased'>
      <Navbar />
      <Hero />
      <About />
      <Services />
     <Campuses />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default App