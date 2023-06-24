import React from "react";
import todo from "../assets/todo.png";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import aiImage from "../assets/ai-image.png";
import globeGo from "../assets/globe-go.png";
import { motion } from "framer-motion";

import ProjCom from "../components/ProjCom";
import Animation from "../components/HeadAnimate"
import Heading from "../components/Heading";

const HeadingAnimate=Animation

const comAnimate = {
  hidden: {
    translateX: -50,
    translateY: -50,
    opacity: 0,
  },
  visible: {
    translateX: 0,
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stiffness: 10
    }
  },
  
};

function Projects() {
  return (
    <motion.div
      className=" relative top-[8vh] lg:h-[92vh] h-full text-white bg-slate-950 font-mono flex flex-col justify-center items-center"
      id="projects"
      whileInView={"visible"}
        initial={"hidden"}
        viewport={{ once: false}}
        transition={{ staggerChildren: 0.5 }}
    >
      <motion.div variants={HeadingAnimate}>
      <Heading heading={"PROJECT WORK"} />
      </motion.div>

      <motion.div
        className="mt-10 mx-6 mb-6 grid min-[1000px]:grid-cols-3 min-[500px]:grid-cols-2 items-center justify-center gap-4 overflow-x-hidden"
        whileInView={"visible"}
        initial={"hidden"}
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.div variants={comAnimate}>
          <ProjCom
            name={"TO-DO LIST"}
            image={todo}
            para={
              "TODO List has the user authentication system where you can add the your task and also it has different category according to which we can search our task. It has both dark and light mode functionality. I have used react js, tailwindcss, express , node js , express and react-google-authentication, context hook , etc"
            }
            gitLink={"https://github.com/Riddhi2409/Todo_List"}
            webLink={"https://todo-0609.netlify.app"}
          />
        </motion.div>
        <motion.div variants={comAnimate}>
          <ProjCom
            name={"AI IMAGE"}
            image={aiImage}
            para={
              "AI Image generator buids with react.js , node js , express js , openai Api , cloudinary and mongodb. In this project , it has create option where we can generate a image from the text and we can upload in the community."
            }
            gitLink={"https://github.com/Riddhi2409/AI-image"}
            webLink={"https://ai-image-0609.netlify.app"}
          />
        </motion.div>
        <motion.div variants={comAnimate}>
          <ProjCom
            name={"GLOBE-GO"}
            image={globeGo}
            para={
              "Globe Go is a frontend static travel management site builds with react js , tailwindcss , framer-motion."
            }
            gitLink={""}
            webLink={"https://globe-go0609.netlify.app"}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
