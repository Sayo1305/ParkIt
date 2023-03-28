import React from 'react'
import Footer from '../components/Footer'
import Herosection from '../components/Herosection'
import Navbar from '../components/Navbar'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  )
}

export default Home