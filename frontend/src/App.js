import React, { useRef } from 'react';
import { useState,useEffect } from 'react';
import './App.css'
import { motion, useScroll, useTransform } from 'framer-motion';


import Preloader from './components/Preloader';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Copyright from './pages/Copyright';

function App() {

  const [loading,setLoading]=useState(false)

  useEffect (()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])

  // if (loading){
  //   return (
  //     <Preloader />
  //   )
  // }

  const scrollY=useRef()

  const { scrollYProgress } = useScroll();
  const lineAnimation = useTransform(scrollYProgress, [0, 1], ['0%', '100.09%']);
  

  return (
    
    <motion.div className='absolute bg-slate-950'  ref={scrollY} >
      <Navbar />
      <motion.div 
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: '8vh',
          right: 0,
          left: 0,
          height: 4,
          backgroundColor: "#D6D5A8",
          transformOrigin: "0%",
        }} className='fixed top-10vh  opacity-100 z-10'/>
       <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Copyright />
      
    </motion.div>
    
  )
}

export default App;
