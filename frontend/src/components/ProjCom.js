import React from 'react'
import todo from '../assets/todo.png'
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { motion,whileHover } from 'framer-motion';


function ProjCom({image,name,para,gitLink,webLink}) {
  return (
    <div 
        className='flex flex-col gap-4 rounded-xl bg-gray-900 lg:h-[70vh] h-auto'
    >
            <div className='mt-4 mx-4 rounded-xl  overflow-hidden'>
                <img src={image} className='rounded-xl  h-[20em] w-full ' />
            </div>
            <div className='text-xl max-md:text-lg items-center flex flex-col justify-center text-center text-orange-300   max-h-32' >
                <h1 className='font-bold text-2xl max-md:text-xl' >{name}</h1>
            </div>
            <div className='mx-4 text-gray-300 text-md overflow-auto h-36 '>
                <p>{para}</p>
            </div>
            <motion.div className='flex text-2xl gap-6 justify-center items-center mb-3'>
                <motion.a href={gitLink} target="_blank" whileHover={{color: 'orange',scale: 1.4}}><FaGithub /></motion.a>
                <motion.a href={webLink} target="_blank" whileHover={{color: 'orange',scale: 1.4}}><BsFillArrowUpRightSquareFill /></motion.a>
            </motion.div>
        </div>
  )
}

export default ProjCom
