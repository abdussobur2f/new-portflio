import React, { useState,useRef, useEffect, } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import '../Header/Header.scss'
const Header = () => {

  const [ menu ,setMenu] = useState(false)

  const [fixed,setFixed] = useState(false)

  let menuRef = useRef(null);

useEffect(()=>{
  document.addEventListener("click" ,handleOut , true)
})
 

  const handleOut = (e)=>{
    if(!menuRef.current.contains(e.target)){
      setMenu(false)

    }
    else{
setMenu(true)
    }


  }

  const handleScroll = ()=>{
    if(window.scrollY > 0){
      setFixed(true)
    }
    else{
      setFixed(false)
    }
  }


  useEffect(()=>{
    window.addEventListener("scroll" ,handleScroll,  )
  },[])

  return (

    <>
     <header className={fixed ? "header fix" : "header   w-100"}  >
    <div className="container-xxl ">
      <div className="row ">
        <div className="col-12 d-flex align-items-center justify-content-between">
        <h1   className="logo"><a href="/" className='text-decoration-underline'>AB/<span>Sobur</span></a></h1>
 
  

  <nav id="navbar"   className={menu ? "top navbar" : 'p-0 navbar'} >
   
    <ul className='flex-column flex-lg-row  flex-md-row 'ref={menuRef} >
     <span className='closeMenu d-lg-none d-md-none d-block position-absolute' onClick={()=>setMenu(false)}><FaTimes/></span>
     <li><a   className="nav-link scrollto active" href="#hero">Home</a></li>
     <li><a   className="nav-link scrollto" href="#about">About</a></li>
     <li><a   className="nav-link scrollto" href="#services">Services</a></li>
     <li><a   className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
 
     <li><a   className="nav-link scrollto" href="#contact">Contact</a></li>
   </ul>
 
  
 </nav>    
 <span className=" menu d-lg-none d-md-none d-block" onClick={()=>setMenu(true)}><FaBars className='d-flex justify-content-center align-items-center'/></span>
        </div>
   

      </div>

    
    </div>
  </header>
    </>
  )
}

export default Header