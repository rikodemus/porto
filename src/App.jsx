import React from 'react'
import Home from './components/Home'
import Pictures from './components/Pictures'
import Projects from './components/Projects'
import Contact from './components/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route exact path='/pictures' element={<Pictures/>} />
   <Route exact path='/projects' element={<Projects/>} />
    <Route exact path='/contact' element={<Contact/>} />
        </Routes>
   </Router>
  )
}

export default App
