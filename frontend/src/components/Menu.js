import React from "react";
import {Link} from 'react-scroll'
import { motion } from "framer-motion";

const content = ["Home", "About", "Skills", "Projects", "Contact"];

const menuAnimate = {
  hidden: {
    opacity: 0,
    x: '-100%'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50
    }
  }
}

function Menu({closeModal}) {
    const close = () => {
        closeModal()
    }

  return (
    <motion.div
      className="md:hidden fixed inset-0  backdrop-blur-sm flex justify-center items-center bg-black w-full overflow-x-hidden h-[100vh] z-20"
      id="wrapper"
      initial={"hidden"}
      whileInView={"visible"}
      variants={menuAnimate}
    >
      <div className="p-4  flex flex-row justify-center gap-4 rounded-xl text-2xl ">
        <div className="flex flex-col gap-8 ">
        {content.map((item)=>(
            <Link className={`text-white  cursor-pointer hover:text-[#D6D5A8]`} to={`${item.toLowerCase()}`} offset={-100} smooth spy={true}  key={item} onClick={close}>{item}</Link>
        ))}
          <div>
            <button className="bg-[#D6D5A8] text-black text-2xl font-bold px-2 py-1 rounded-xl">
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Menu;
