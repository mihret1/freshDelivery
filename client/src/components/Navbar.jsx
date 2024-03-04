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
         <div className="h-16">
           
           <div className="  flex flex-row  gap-3 justify-center pt-[1%] text-lg font-semibold">

                <select className='border-none outline-none'>
                    <option value="0"><a href='/'>Type</a></option>
                    <option value="0"><a href='/'>Hotel</a></option>
                    <option value="0"><a href='/'>park</a></option>
                    <option value="0"><a href='/'>muesuem</a></option>
                    <option value="0"><a href='/'>churches</a></option>
                    <option value="0"><a href='/'>waterBody</a></option>
                    <option value="0"><a href='/'>mountain</a></option>
                    <option value="0"><a href='/'>crafts</a></option>

                 
                </select>

                <select className='border-none outline-none'>
                    <option value="0"><a href='/'>Country</a></option>
                    <option value="0"><a href='/'>Addis Abeba</a></option>
                    <option value="0"><a href='/'>arbaminch</a></option>
                    <option value="0"><a href='/'>hawwasa</a></option>
                    <option value="0"><a href='/'>bahirdar</a></option>
                    <option value="0"><a href='/'>gonder</a></option>
                    <option value="0"><a href='/'>axsum</a></option>
                    <option value="0"><a href='/'>zway</a></option>
                    <option value="0"><a href='/'>butajira</a></option>
                    <option value="0"><a href='/'>afar</a></option>
                    <option value="0"><a href='/'>somalia</a></option>
                    <option value="0"><a href='/'>tigria</a></option>
                    <option value="0"><a href='/'>oromia</a></option>
                    <option value="0"><a href='/'>gambella</a></option>
                    <option value="0"><a href='/'>hossana</a></option>


                 
                </select>

                <select className='border-none outline-none'>
                    <option value="0"><a href='/'>Packages</a></option>
                    <option value="0"><a href='/'>Group</a></option>
                    <option value="0"><a href='/'>indiviual</a></option>   
                </select>

                <select className='border-none outline-none'>
                    <option value="0"><a href='/'>Pages</a></option>
                    <option value="0"><a href='/'>Signup</a></option>
                    <option value="0"><a href='/'>Login</a></option>
                    <option value="0"><a href='/'>blog</a></option>
                    <option value="0"><a href='/'>services</a></option>
                    <option value="0"><a href='/'>contact</a></option>
                    <option value="0"><a href='/'>about-us</a></option>
                    <option value="0"><a href='/'>packages</a></option>
                    <option value="0"><a href='/'>Country</a></option>
                    <option value="0"><a href='/'>type</a></option>


                 
                </select>

               <button className='px-3'><a href='/'>Services</a></button>

               <button className='px-3'><a href='/'>About-Us</a></button>

               <button className='px-3'><a href='/'>Blog</a></button>

               <button className='px-3'><a href='/'>Contact</a></button>
               
               <button className='bg-[#2fac82] px-8 py-1'><a href='/'>Login</a></button>


              
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