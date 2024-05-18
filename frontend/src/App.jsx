import React from 'react'
import Home from './Home/Home'
import Courses from './components/Courses'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Courses' element={<Courses/>}/>

    </Routes>

    </>
  )
}

export default App