import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import Signup from './Signup/Sign'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/Signup' element={<Signup/>}/>

    </Routes>

    </>
  )
}

export default App