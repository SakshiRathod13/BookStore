import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Free from '../components/Free.jsx'
import Footer from '../components/Footer.jsx'


const Home = () => {
  return (
    <>
     <Navbar/>
      <Banner/>
      <Free/>
      <hr></hr>
      <Footer/>
    </>
  )
}

export default Home