import React from "react";
import Touch from '../components/Touch'
import Form from "../components/Form";
import Heading from "../components/Heading";
import { motion } from "framer-motion";
import Animation from '../components/HeadAnimate'

function Contact() {
  return (
    <motion.div
      className=" relative top-[8vh] xl:h-[92vh] h-full text-white bg-slate-950 font-mono flex flex-col justify-center items-center opacity-95"
      id="contact"
      whileInView={"visible"}
      initial={"hidden"}
      viewport={{once:false, amount:0.3}}
      transition={{staggerChildren: 0.7}}
    >
      <motion.div variants={Animation}>
        <Heading heading="CONTACT ME" />
      </motion.div>
      <div className="w-full mt-10">
        <div className="mx-10 rounded-xl flex xl:flex-row flex-col gap-2  mb-6">
          <Touch />
          <Form />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
