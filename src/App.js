import './App.css'
import React from 'react'
import Home from './components/Home'
import PageAbout from './components/PageAbout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Import Routes instead of Switch

const baseURL = '/moto-rental'

function App() {
  return (
    <Router basename={baseURL}>
      <div className='app'>
        <Routes>
          {' '}
          {/* Use Routes instead of Switch */}
          <Route exact path='/' element={<Home />} />
          <Route path='/about-us' element={<PageAbout />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
