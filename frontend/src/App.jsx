import React from 'react'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
    <div className='px-4 sm:px-[ 5vw] md:px-[7vw] lg:px-[9vw]'>
      <Header /> 

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
