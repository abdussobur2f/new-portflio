import React from 'react'

 import Home from '../Pages/Home'
 import About from '../Pages/About'
 import Services from '../Pages/Services'
import Portfolio from '../Pages/Portfolio'
import Contact from '../Pages/Contact'
import { Navigate, Route, Routes, } from 'react-router-dom'
function Layout() {
  return (
    <div>
      
       <Routes>

            <Route path="/" element={<Navigate to="home"/>}/>
            <Route exact path='/home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='portflio' element={<Portfolio />} />
            <Route path='contact' element={<Contact />} />
            
           
           
             
   
          
         
 
          </Routes>
    
    </div>
  )
}

export default Layout
