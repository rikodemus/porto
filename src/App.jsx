import React from 'react'
import Home from './components/Home'
import Pictures from './components/Pictures'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route exact path='/pictures' element={<Pictures/>} />
        </Routes>
   </Router>
  )
}

export default App
