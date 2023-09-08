import React from 'react'

const PageWelcome = ({pageName}) => {
  return (
    <div style={{backgroundImage:'url(/bg2.png)', backgroundRepeat:'no-repeat', backgroundPosition:"cover", backgroundSize:"cover"}} 
          className=' bg=[/bg2.png] w-full container mx-auto mb-10 bg-black h-[40vh] flex justify-center items-center'>
       <h1 className="bg-black bg-opacity-20 text-white font-extrabold p-5">{pageName}</h1>  
    </div>
  )
}

export default PageWelcome