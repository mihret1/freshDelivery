import { useState,useEffect } from 'react'

function Navbar() {
    const [isTransparet,setIsTransparent]=useState(false)

    useEffect(()=>{
        const handleTrasparency=()=>{
            if(window.scrollY >= 300){
                setIsTransparent(true)
            }else{
                setIsTransparent(false)
            }
        }

        window.addEventListener('scroll',handleTrasparency)
        return()=>{window.removeEventListener('scroll',handleTrasparency)}
    },[])


  return (
    <div>

    {!isTransparet ?  
    <div className=''>
        <div className={`h-7 bg-gradient-to-b from-[#218B67] to-[#37bd91]   w-[100%]`}>hello</div>
        <div className=" bg-slate-400 h-[100px] ">hello</div>
        <div className="h-14 bg-slate-300"></div>
    </div> 
    :
    <div className='fixed w-[100%]'>
    <div className={`h-7 bg-[#218B67] `}>hello</div>

   <div className={`h-[100px] ${isTransparet && 'fixed'}  w-[100%] bg-red-500`}></div> 
   </div>
    }    
</div>
  )

}

export default Navbar