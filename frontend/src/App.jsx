import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Footer from './components/Footer'

const App = () => {
    return (
        <div className='px-4 sm:px-[ 5vw] md:px-[7vw] lg:px-[9vw]'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collection' element={<Collection />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
