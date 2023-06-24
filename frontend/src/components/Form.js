import React from 'react';
import { useRef } from 'react';
import axios from 'axios'
import { motion } from 'framer-motion';

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

function Form() {
  const name=useRef();
  const email=useRef();
  const subject=useRef();
  const message=useRef();

  const formHandler = (e) => {
    e.preventDefault()
    const data={
      name: name.current?.value,
      email: email.current?.value,
      subject:subject.current?.value,
      message:message.current?.value,
    }
    console.log(data)
    name.current.value=""
    email.current.value=""
    subject.current.value=""
    message.current.value=""
    axios.post('http://localhost:8080/mail',{...data})
      .then((response)=>{
        console.log(response)
        alert("Message sent successfully")
      })
      .catch((err)=>{
        console.log(err)
        alert("An error occured")
      })
  }

  return (
    <motion.div 
      className="flex flex-col xl:w-[50%] m-4 shadow-2xl shadow-slate-900 bg-gradient-to-bl from-slate-800 via-slate-700 to-slate-900 rounded-md  p-4"
      whileInView={"visible"} 
      initial={"hidden"}
      viewport={{once:false, amount:0.5}}
      transition={{staggerChildren: 0.5}}
    >
             <form className="flex flex-col gap-4 " onSubmit={formHandler}>
                <motion.div className="flex flex-col gap-2 text-lg"         variants={gridAnimate}>
                  <label>Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className=" bg-gray-800 p-1 text-base rounded-md px-4" 
                      ref={name}
                      required/>
                </motion.div>
                <motion.div className="flex flex-col gap-1 text-lg" variants={gridAnimate}>
                  <label>Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className=" bg-gray-800 p-1 text-base rounded-md px-4"
                      ref={email} 
                      required/>
                </motion.div>
                <motion.div className="flex flex-col gap-1 text-lg" variants={gridAnimate}>
                  <label>Subject</label>
                    <input 
                      type="text" 
                      placeholder="Enter subject" 
                      className=" bg-gray-800 p-1 text-base rounded-md px-4" 
                      ref={subject}
                      required/>
                </motion.div>
                <motion.div className="flex flex-col gap-1 text-lg" variants={gridAnimate}>
                  <label>Message</label>
                  <textarea 
                    className="bg-gray-800 text-base px-4 p-1 rounded-md" placeholder="Enter your message" 
                    ref={message}
                    required></textarea>
                </motion.div>
                <motion.div className="mt-2" variants={gridAnimate}>
                  <button 
                    className="bg-[#D6D5A8] text-black p-2 rounded-md font-semibold hover:bg-yellow-200"
                    type="submit"
                    >SEND MESSAGE</button>
                </motion.div>
             </form>
          </motion.div>
  )
}

export default Form
