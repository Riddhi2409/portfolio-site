import React from 'react'
import { motion } from 'framer-motion'

const gridAnimate = {
  hidden: {
    opacity: 0,
    y:100
  },
  visible: {
    opacity:1,
    y:0,
    transition: {
      duration: 3,
      type: "spring",
      stiffness: 10,
      bounce: 0.7,
      delay: 1.5
    }
  }
}

function Bio() {
  return (
    <motion.div className='text-lg font-mono' 
      whileInView={"visible"} 
      initial={"hidden"}
      viewport={{once:false, amount:0.5}}
      transition={{staggerChildren: 0.5}}
    >
      <motion.p className=' md:px-6 ' variants={gridAnimate}>
        Hey there! I'm Riddhi Agrawal, a 19-year-old from India with a strong interest for technology. Currently, I'm pursuing my second year of BTech in Computer Science and Engineering in IIIT Bhubaneswar, specializing in Full Stack development with the MERN stack (MongoDB, Express, React, Node.js).
      </motion.p>
      <motion.p className='max-md:hidden px-6 pt-2' variants={gridAnimate}>
        Discipline and hard work are two values that define me. I approach every task with a determined mindset, striving for excellence and consistently meeting deadlines. I firmly believe that the secret to success lies in pushing oneself beyond limits and embracing challenges with enthusiasm.
      </motion.p>
      <motion.p className='max-sm:hidden md:px-6 pt-2' variants={gridAnimate}>
        As I continue my educational journey and forge ahead in my career, I'm excited about the possibilities that lie ahead. With each day, I'm growing and evolving, honing my skills and expanding my knowledge. My unwavering dedication, strong work ethic, and multidisciplinary approach are the pillars that support my aspirations.
      </motion.p>
    </motion.div>
  )
}

export default Bio
