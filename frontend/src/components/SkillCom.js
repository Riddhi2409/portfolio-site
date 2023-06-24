import React from 'react';
import { motion } from 'framer-motion';

function SkillCom({heading,image1,name1,image2,name2}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <div className='flex flex-col justify-center items-center '>
            <h1 className="font-sans italic text-[#D6D5A8] text-center">{heading}</h1>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 text-lg">
          <motion.div className="flex flex-col items-center gap-2">
            <motion.img src={image1} alt="" className="h-14 max-[350px]:h-10" whileHover={{scale: 1.3}}/>
            <h1>{name1}</h1>
          </motion.div>
          {image2 && <motion.div className="flex flex-col items-center gap-2">
            <motion.img src={image2} alt="" className="h-14 max-[350px]:h-10" whileHover={{scale: 1.3}}/>
            <h1>{name2}</h1>
          </motion.div>}
        </div>
        <div className="w-2/3 border-4 border-[#D6D5A8] rounded-br-md rounded-bl-md"></div>
      </div>
  )
}

export default SkillCom
