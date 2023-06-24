import React from "react";
import Skill from "../components/Skill";
import Heading from "../components/Heading";
import Animation from '../components/HeadAnimate'
import { motion } from "framer-motion";

const HeadingAnimate=Animation

const skillAnimate={
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      type: "spring"
    }
  }
}

function Skills() {
  return (
    <motion.div
      className="relative top-[8vh] bg-slate-950 font-mono flex flex-col justify-center items-center text-white min-[1090px]:h-[92vh] h-full w-full -pt-4 pb-6"
      id="skills"
      whileInView={"visible"}
      initial={'hidden'}
      viewport={{once:false}}
      transition={{staggerChildren: 0.5}}
    >
      <motion.div variants={HeadingAnimate}>
      <Heading heading={"MY SKILLS"} />
      </motion.div>
      <div className=" mt-6 w-full mb-4">
        <div className=" mx-10  p-4 flex bg-gradient-to-r from-gray-900 to-gray-600 bg-gradient-to-r h-full rounded-xl" >
          <Skill />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
