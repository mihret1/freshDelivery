import { useState,useEffect } from 'react'

function Navbar() {
    const [isTransparet,setIsTransparent]=useState(false)

    useEffect(()=>{
        const handleTrasparency=()=>{
            if(window.scrollY >=90){
                setIsTransparent(true)
            }else{
                setIsTransparent(false)
            }
        }

        window.addEventListener('scroll',handleTrasparency)
        return()=>{window.removeEventListener('scroll',handleTrasparency)}
    },[])
  return (
    <>
  {  <div>
        <div className="h-7 bg-green-800">hello</div>
        <div className=" bg-slate-400 h-[115px] ">hello</div>
        <div className="h-14 bg-slate-300"></div>
    </div>}

    <div className='h-[120px] bg-red-500'></div>
    </>
  )
}

export default Navbar