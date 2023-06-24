import React from 'react'

function Heading({heading}) {
  return (
    <div 
      className="flex flex-col h-fit justify-center font-bold items-center gap-4 mx-10"
    >
        <div className="h-fit w-fit ">
          <h1 className="text-4xl">{heading}</h1>
          <div 
            className={`w-full h-2 bg-[#FFAA33] after:bg-yellow-200 after:h-2 after:w-3 after:absolute  after:content-[""] ${heading==="PROJECT WORK"?"after:animate-moving-project":"after:animate-moving-border"} after:rounded-full rounded-md`}></div>
        </div>
      </div>
  )
}

export default Heading
