import React from 'react'
import {MdSchool } from 'react-icons/md';
import {MdLibraryBooks } from 'react-icons/md';
import {FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const boxAnimate = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        x:0,
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            stiffness: 20,
            bounce: 0.7
        }
    },

}

const insideAnimate= {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    visible:{
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.5,
            stiffness: 10,
            type: "spring",
        }
    }
}

function Education() {
  return (
    <motion.div 
        className='flex flex-wrap gap-2 lg:justify-center w-full justify-start'
        whileInView={"visible"}
        initial={"hidden"}
        viewport={{once: false, amount: 0.5}}
        transition={{staggerChildren: 0.5,delay: 5}}
    >
        <motion.div 
            className='flex flex-col justify-start items-start border-2 p-2 w-[20em] max-[400px]:w-[10em] grow '
            variants={boxAnimate}
        >
            <div className='text-5xl max-[1350px]:text-5xl text-white'>
                <MdSchool />
            </div>
            <div className='flex flex-col gap-2 text-xl max-sm:text-base'>
                <h1>2021-2025</h1>
                <h1>UNDER-GRADUATION (B-TECH) </h1>
                <h1>COMPUTER SCIENCE AND ENGINEERING</h1>
                <h2>cgpa: 9.09 (upto 2nd semester)</h2>
            </div>
        </motion.div>

        <motion.div 
            className='flex flex-col justify-start items-start border-2 p-2 w-[20em] grow max-[400px]:w-[10em] '
            variants={boxAnimate}
        >
            <div className='text-5xl max-[1350px]:text-5xl text-white'>
                <FaUniversity />
            </div>
            <div className='flex flex-col gap-2 text-xl max-sm:text-base'>
                <h1 className='text-xl max-sm:text-base'>Class-12</h1>
                <h1>2021</h1>
                <h2>percentage-93.8%</h2>
                <h1>VIKASH RESIDENTIAL SCHOOL, BARGARH</h1>
            </div>
        </motion.div>

        <motion.div 
            className='flex flex-col justify-start items-start border-2 p-2 w-[20em] grow max-[400px]:w-[10em]'
            variants={boxAnimate}
        >
            <div className='text-5xl max-[1350px]:text-4xl text-white'>
                <MdLibraryBooks />
            </div>
            <div className='flex flex-col gap-2 text-xl max-sm:text-base '>
                <h1 className='text-xl max-sm:text-base'>Class-10</h1>
                <h1>2020</h1>
                <h2>percentage-86.8%</h2>
                <h1>VIDYASAGAR ACADEMY,BARGARH</h1>
            </div>
        </motion.div>
      
      
    </motion.div>
  )
}

export default Education
