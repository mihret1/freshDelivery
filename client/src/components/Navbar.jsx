import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter ,faYoutube,faInstagram,faSkype, faTelegram} from '@fortawesome/free-brands-svg-icons'
import logo1 from '../assets/l1.jpg'

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
        <div className={`flex h-7 bg-gradient-to-b from-[#218B67] to-[#339e7a]   w-[100%] justify-around`}>
           
           <div className='flex flex-row gap-3 text-white'>
                <button><FontAwesomeIcon icon={faFacebookF} /></button>
                <button> <FontAwesomeIcon icon={faTwitter} /></button>
                <button>  <FontAwesomeIcon icon={faInstagram} /></button>
                <button> <FontAwesomeIcon icon={faSkype} /></button>
               <button> <FontAwesomeIcon icon={faYoutube} /></button>
                <button> <FontAwesomeIcon icon={faTelegram} /></button>
               
           </div>
           <div className='text-white'>
             <button><FontAwesomeIcon icon={faFacebookF} /></button>
           </div>
           </div>
          <div className=" bg-white  border-b h-[120px] flex  justify-around items-center">
            <div className='flex'>
                <img src={logo1} className='h-[100px]'/>
                <div className=' flex flex-col justify-center gap-1'>
                    <h1 className='font-bold text-3xl'>Travel Agency</h1>
                    <p className=''>Ethiopian Tour and travel website</p>

                </div>
            </div>
            <div className='flex flex-col items-end'>
                <p>call us? we are open 24/7</p>
                <h1 className='text-green-700 font-bold text-xl'>(+251)934567892 </h1>
            </div>
          </div>
         <div className="h-12">
           <div className="custom-select p-5">
                <select>
                    <option value="0">Select car:</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option>
                    <option value="6">Jaguar</option>
                    <option value="7">Land Rover</option>
                    <option value="8">Mercedes</option>
                    <option value="9">Mini</option>
                    <option value="10">Nissan</option>
                    <option value="11">Toyota</option>
                    <option value="12">Volvo</option>
                </select>
          </div>
         </div>
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