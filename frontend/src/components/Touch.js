import React from "react";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";

const gridAnimate = {
  hidden: {
    opacity: 0,
    y:100
  },
  visible: {
    opacity:1,
    y:0,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 10,
      bounce: 0.7
    }
  }
}

function Touch() {
  return (
    <motion.div 
      className="m-4 flex flex-col items-center justify-center xl:w-[50%] gap-4 shadow-2xl shadow-slate-900 bg-gradient-to-bl from-slate-800 via-slate-700 to-slate-900 p-2 rounded-md "
      whileInView={"visible"} 
      initial={"hidden"}
      viewport={{once:false, amount:0.5}}
      transition={{staggerChildren: 0.5}}
    >
      <motion.h1 
        className="text-2xl font-extrabold"
        variants={gridAnimate}
      >
          GET IN TOUCH
        </motion.h1>
      <motion.p 
        className="text-lg text-slate-300"
        variants={gridAnimate}
      >
        Feel free to contact me for opportunities as a Full-stack web developer
        or any kind of discussion. hether you have any further questions or just
        want to say hi,I'll try my best to get back to you!
      </motion.p>
      <motion.div 
        className="flex  gap-4 mb-4 md:flex-row flex-col max-md:gap-8 md:items-center md:justify-center w-full"
        variants={gridAnimate}
      >
        <div className="flex flex-row gap-4 md:shadow-2xl shadow-slate-950 py-1 px-3 rounded-xl justify-center items-center text-mono  bg-gray-800 ">
          <div className=" text-2xl shadow-2xl p-2 rounded-full text-white font-bold bg-gray-600  ">
            <MdCall />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="break-words">Contact on Phone</h1>
            <h1 className="break-words">+91 7064092288</h1>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:shadow-2xl shadow-slate-950 py-1 px-3 rounded-xl justify-center items-center bg-gray-800 max-sm:gap-2 ">
          <div className=" text-2xl shadow-2xl p-2 rounded-full text-white font-bold bg-gray-600">
            <HiMail />
          </div>
          <div className="flex flex-col justify-center items-center text-center max-sm:gap-1">
            <h1 className="break-words">Contact on mail</h1>
            <h1 className="break-all">riddhiagrawal0609@gmail.com</h1>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="flex flex-row  gap-10 md:text-3xl "
        variants={gridAnimate}
      >
            <div className="border-4 hover:bg-[#D6D5A8] hover:text-black border-[#D6D5A8] rounded-full p-2">
                <a href="https://www.linkedin.com/in/riddhi-agrawal-222b3b22a/" target="_blank"><ImLinkedin2 /></a>
            </div>
            <div className="border-4 hover:bg-[#D6D5A8] hover:text-black border-[#D6D5A8] rounded-full p-2">
                <a href="https://github.com/Riddhi2409" target="_blank"><AiFillGithub /></a>
            </div>
            <div className="border-4 hover:bg-[#D6D5A8] hover:text-black border-[#D6D5A8] rounded-full p-2">
                <a href="mailto:riddhiagrawal0609@gmail.com" target="_blank"><GrMail /></a>
            </div>
        </motion.div>
    </motion.div>
  );
}

export default Touch;
