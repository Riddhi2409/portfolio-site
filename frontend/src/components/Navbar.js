import React from 'react'
import { useState } from 'react';
import { FaAlignJustify} from 'react-icons/fa';
import { MdDownload} from 'react-icons/md';
import Menu from './Menu';
import { Link } from "react-scroll";

const content = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
]



function Navbar() {
  const [showMenu,setShowMenu]=useState(false);
    const handleClose = () => {
        setShowMenu(false)
    }
  return (
    <div className='fixed top-0 w-full h-[8vh] text-[#D6D5A8] flex flex-row  items-center  justify-between gap-10 px-12 bg-slate-950 lg:px-32 pt-2 z-10'>
      <div className=' font-bold '>
        <h1 className='text-3xl'>RIDDHI.</h1>
      </div>
      <div className='hidden md:flex flex-row lg:gap-4 gap-4 items-center'>
        {content.map((item)=>(
            <Link className={`text-white text-xl  cursor-pointer hover:text-[#D6D5A8]`} to={`${item.toLowerCase()}`} offset={-50} smooth spy={true}  key={item}>{item}</Link>
        ))}
        <div>
            <a className='bg-[#D6D5A8] text-black text-xl font-bold px-3 py-1 rounded-xl flex items-center gap-2 ' href="" download>
                <MdDownload />
                <h1>Resume</h1>
                </a>
        </div>
        
      </div>
      <div className='md:hidden text-3xl text-white'>
            <FaAlignJustify onClick={()=>setShowMenu(true)}/>
        </div>
        {showMenu && <Menu closeModal={handleClose} />}
    </div>
    
  )
}

export default Navbar
