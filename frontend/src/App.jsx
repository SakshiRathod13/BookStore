import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Footer from './Footer'
import Free from './components/Free.jsx'
const App = () => {
  return (
    <div>  
      <Navbar/>
      <Banner/>
      <Free/>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App