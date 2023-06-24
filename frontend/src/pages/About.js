import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import humaans from "../Humaaans.png";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Animation from '../components/HeadAnimate'

import Bio from "../components/Bio";
import Education from "../components/Education";
import Heading from "../components/Heading";

const activeClass = "underline text-[#D6D5A8] text-2xl";
const normalClass = "text-white text-2xl ";

const HeadingAnimate=Animation

const imageAnimate = {
  hidden: {
    opacity: 0,
  },
  visible : {
    opacity: 1,
    scale: [0.7,1,2]
  }
}

const barAnimate= {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      type: "spring",
      bounce: 10,
      duration: 1,
      stiffness: 10
    }
  }
}

function About() {
  return (
    <motion.div 
      className=" relative top-[8vh] min-[1090px]:h-[92vh] h-full text-white bg-slate-950 font-mono flex flex-col justify-center items-center" 
      id="about"
      whileInView={"visible"}
      initial={"hidden"}
      viewport={{once:false, amount:0.3}}
      transition={{staggerChildren: 0.7}}
    >
      <motion.div variants={HeadingAnimate}>
        <Heading heading={"ABOUT ME"}/>
      </motion.div>

      <motion.div className="w-full" variants={barAnimate}>
        <div className="flex gap-10 justify-start mx-10 sm:px-10 px-2 my-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Bio
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Education
          </NavLink>
        </div>
      </motion.div>
      <motion.div className=" mt-4 mx-10 flex lg:flex-row flex-col justify-center items-center  bg-slate-900 rounded-xl max-lg:py-4 px-2 mb-4 overflow-hidden">
        <div className="lg:w-[60%] w-full  h-full flex lg:justify-center lg:items-center justify-start p-4">
          <Routes>
            <Route path="/*" element={<Bio />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </div>
        <motion.div 
          className="lg:w-[40%] w-[60%] max-sm:w-[100%] flex items-center justify-center" initial={{opacity:0,x: 100}} 
          whileInView={
            {
              opacity: 1, 
              x: 0,
              transition: {
                duration: 2,
                stiffness: 15,
                delay: 1
              }
            }
          }>
          <img src={humaans} alt="" className="w-[90%]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
