import React from 'react'
import logo from '../assets/logo1.png'
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";


function Copyright() {
  return (
    <div className='relative bg-black top-[8vh] text-white flex flex-col items-center'>
      <div>
        <img src={logo} className='h-[25em] z-0'/>
      </div>
      <div className='flex items-center gap-6 -top-10 relative z-10 flex-row max-[480px]:flex-col '>
        <div className='flex items-center gap-1 text-xl'>
            <MdCall />
            <h1 className='text-lg'>+91 7064092288</h1>
        </div>
        <div className='flex items-center gap-1 text-xl'>
            <HiMail />
            <h1>riddhiagrawal0609@gmail.com</h1>
        </div>
      </div>
      <div className='w-full flex flex-col items-center gap-2 mb-6 text-slate-400 opacity-95'>
            <h1 className='md:text-xl text-base'>Designed & Developed by Riddhi Agrawal</h1>
            <hr className='w-full'/>
            <div className='flex flex-row items-center md:text-lg text-sm' >
                <BiCopyright />
                <h1> Copyright 2023, ALL RIGHTS RESERVED</h1>
            </div>
        </div>
    </div>
  )
}

export default Copyright
