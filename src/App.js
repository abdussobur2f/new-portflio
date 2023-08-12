import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.scss'
 import Header from './Component/Header/Header'
 import Footer from './Component/Footer/Footer'
import Layout from './Layout/Layout';
import Hero from './Pages/Hero';
import "animate.css/animate.min.css";
const  App= () => {
  return (
    <>
   <Header/>
   <Hero/>
<main>
 <Layout/>
</main>
   <Footer/>
 
    </>
  );
}

export default App;
