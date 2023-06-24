import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

function Preloader() {
  return (
    <div className='bg-[#081f2c] h-screen flex justify-center items-center'>
      <SyncLoader 
        size={20}
        color='white'
      />
    </div>
  )
}

export default Preloader
