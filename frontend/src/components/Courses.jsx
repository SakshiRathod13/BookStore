import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import list from '.../public/List'

const Courses = () => {
    console.log(list)
  return (
    
    <>
    <Navbar/>
    <div className='mt-20 min-h-screen'>
        <h1 className='text-xl text-center mt-20 '>We Are Delighted to have you <span className='text-pink-500'>here! :)</span></h1>

    </div>
    <Footer/>
    </>
  )
}

export default Courses