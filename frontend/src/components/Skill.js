import React from "react";
import html from "../assets/html.png";
import css from "../assets/css1.png";
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import mongo from '../assets/MongoDB.jpg'
import express from '../assets/express.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import javascript from '../assets/js.png'
import cpp from '../assets/c++.png'
import python from '../assets/python.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import express1 from '../assets/express1.png'
import { motion } from "framer-motion";

import SkillCom from "./SkillCom";

const bottomAnimate = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      stiffness: 10,
      bounce: 10,
      type: "spring",
      // delay: 1
    }
  }
}

function Skill() {
  return (
    <motion.div 
      className="w-full grid min-[1090px]:grid-cols-3 md:grid-cols-2 text-white text-xl font-bold gap-x-4 gap-y-8 max-[350px]:text-base justify-center items-center"
      whileInView={"visible"}
      initial="hidden"
      viewport={{once: false}}
      transition={{staggerChildren: 0.3}}
    >
      <motion.div variants={bottomAnimate}> 
      <SkillCom heading="MARKUP / STYLING LANGUAGE" image1={html} name1={"HTML"} image2={css} name2="TAILWINDCSS" />
      </motion.div>
      <motion.div variants={bottomAnimate}>
      <SkillCom heading="CSS FRAMEWORK" image1={bootstrap}  name1={"BOOTSTRAP"} image2={tailwind} name2="CSS" />
      </motion.div>
      <motion.div variants={bottomAnimate}>
      <SkillCom heading="FRONTEND FRAMEWORK" image1={react}  name1={"REACT"} />
      </motion.div>
      <motion.div variants={bottomAnimate}>
      <SkillCom heading="BACKEND FRAMEWORK" image1={node}  name1={"NODE"} image2={express1} name2="EXPRESS" />
      </motion.div>
      <motion.div variants={bottomAnimate}>
      <SkillCom heading="DATABASE MANAGEMENT" image1={mongo}  name1={"MONGO DB"} />
      </motion.div>
      <motion.div className="flex flex-col  justify-center items-center gap-4" variants={bottomAnimate}>
        <div>
            <h1 className="font-sans italic text-[#D6D5A8] text-center">PROGRAMMING LANGUAGE</h1>
        </div>
        <div className="flex flex-row justify-center gap-6  max-[350px]:gap-2 text-lg">
        <div className="flex flex-col items-center">
            <motion.img src={javascript} alt="" className="h-14  max-[350px]:h-10" whileHover={{scale: 1.3}}/>
            <h1>JAVASCRIPT</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.img src={cpp} alt="" className="h-14 max-[350px]:h-10" whileHover={{scale: 1.3}}/>
            <h1>C++</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.img src={python} alt="" className="h-14  max-[350px]:h-10" whileHover={{scale: 1.3}}/>
            <h1>PYTHON</h1>
          </div>
        </div>
        <div className="w-2/3 border-4 border-[#D6D5A8] rounded-br-md rounded-bl-md"></div>
      </motion.div>
      <motion.div variants={bottomAnimate}>
      <SkillCom heading={'VERSION CONTROL'} image1={git} name1={"GIT"} image2={github} name2={"GITHUB"} />
      </motion.div>
    </motion.div>
    
  );
}

export default Skill;
