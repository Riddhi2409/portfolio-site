import React from 'react'
import imagea from '../portfolio-image.jpg';


function Imageaa() {
  return (
    <div className="lg:w-[410px] lg:h-[410px] rounded-full overflow-hidden border-8 border-[#D6D5A8] sm:w-[300px] sm:h-[300px] min-[400px]:w-[250px] min-[400px]:h-[250px] w-[200px] h-[200px]">
        
        <img  src={imagea} alt="" className='rounded-full lg:-translate-y-36 -translate-y-20 object-cover'/>
        
    </div>
   
  )
}

export default Imageaa
