import React from "react";
import Typewriter from "typewriter-effect";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Imageaa from "../components/Imageaa";
import { motion } from "framer-motion";

const rightAnimate = {
  hidden: {
    opacity: 0,
    x: 500
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 10
    }
  }
}

const lefttAnimate = {
  hidden: {
    opacity: 0,
    x: -500
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      stiffness: 10
    }
  }
}

function Home() {
  return (
    <motion.div className="relative top-[8vh] w-full h-[92vh] bg-slate-950 text-white font-mono overflow-x-hidden" id="home" whileInView={"visible"} initial={"hidden"}>
      <div className=" flex lg:flex-row flex-col-reverse justify-center lg:px-28 px-12 lg:gap-8 max-sm:gap-4 items-center  gap-3 h-full">
        <motion.div className=" hidden lg:flex flex-col  gap-10 md:text-3xl" variants={rightAnimate}>
            <div className="border-4 hover:bg-[#D6D5A8] hover:text-black border-[#D6D5A8] rounded-full p-2">
                <a href="https://www.linkedin.com/in/riddhi-agrawal-222b3b22a/" target="_blank"><ImLinkedin2 /></a>
            </div>
            <div className="border-4 hover:bg-[#D6D5A8] hover:text-black border-[#D6D5A8] rounded-full p-2">
                <a href="https://github.com/Riddhi2409"><AiFillGithub /></a>
            </div>
            <div className="border-4 hover:bg-[#D6D5A8] hover:text-black border-[#D6D5A8] rounded-full p-2">
                <GrMail />
            </div>
        </motion.div>
        <motion.div className="flex flex-col gap-4 lg:w-[40%] w-full" variants={rightAnimate}>
          <div className="flex gap-2 sm:text-3xl text-2xl items-center max-sm:text-xl">
            <h1>Hii</h1>
            <h1 className="animate-waving-hand md:text-4xl text-2xl max-sm:text-xl">👋</h1>
          </div>
          <h1 className="sm:text-3xl text-xl max-[300px]:text-base font-semibold ">I'm Riddhi Agrawal</h1>
          <div className="sm:text-3xl max-[300px]:text-base text-[#D6D5A8]">
            <Typewriter
              options={{
                strings: ["Software Engineer", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <p className="lg:text-xl max-[300px]:text-base max-sm:h-[30vh] text-lg overflow-auto">
              I am a full-stack web developer and a blockchain enthusiastic.
              Currently I am in my second year,persuing a bachelor's in CSE from
              IIIT Bhubaneswar.
            </p>
          </div>
        </motion.div>
        <motion.div variants={lefttAnimate} whileHover={{
          y: [-10,10,-20,20,0],
          duration: 0.5,
          type: "spring",
          stiffness: 10
        }}>
          <Imageaa />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
