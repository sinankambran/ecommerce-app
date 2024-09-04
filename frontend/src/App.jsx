import React from 'react'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='px-4 sm:px-[ 5vw] md:px-[7vw] lg:px-[9vw]'>
      <Header /> 

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />


      </Routes>
      <Footer/>
    </div>
  )
}

export default App
