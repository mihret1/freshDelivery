import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter ,faYoutube,faInstagram,faSkype, faTelegram} from '@fortawesome/free-brands-svg-icons'
import logo1 from '../assets/l1.jpg'

function Navbar() {
    const [isTransparet,setIsTransparent]=useState(false)

    useEffect(()=>{
        const handleTrasparency=()=>{
            if(window.scrollY >=150){
                setIsTransparent(true)
            }else{
                setIsTransparent(false)
            }
        }

        window.addEventListener('scroll',handleTrasparency)
        return()=>{window.removeEventListener('scroll',handleTrasparency)}
    },[])


  return (
    <div className=''>

    {!isTransparet ?  
    
      <div className='navInner'>

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

          <div className=" bg-white  border-b h-[120px] flex  justify-around items-center ">
            <div className='flex'>
                <img src={logo1} className='h-[100px] max-md:h-[80px]'/>
                <div className=' flex flex-col justify-center gap-1'>
                    <h1 className='font-bold text-3xl max-md:text-2xl'>Travel Agency</h1>
                    <p className=''>Ethiopian Tour and travel website</p>

                </div>
             </div>
             <div className='flex flex-col items-end max-sm:mr-2'>
                <p>call us? we are open 24/7</p>
                <h1 className='text-green-700 font-bold text-xl max-md:text-lg'>(+251)934567892 </h1>
             </div>
          </div>

         <div className=" bg-white h-14 max-lg:flex max-lg:flex-row max-lg:justify-end max-lg:items-center max-lg:pr-[5%]">
           
           <button className='hidden max-lg:flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>

          </button>

           <div className=" hidden lg:flex flex-row  gap-3 justify-center pt-[0.5%] text-lg font-semibold">

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
    
    <div className='fixed  w-[100%] navInner'>

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
  
      <div className={` bg-white h-[110px] ${isTransparet && 'fixed'} justify-between pl-[1%] pr-[4%] lg:max-xl:pr-[2px] w-[100%]  flex flex-row items-center` }>
          
          <div className='flex'>
                    <img src={logo1} className='h-[100px]  lg:max-xl:pt-1'/>
                    <div className=' flex flex-col justify-center gap-1 '>
                        <h1 className='font-bold text-3xl  '>Travel Agency</h1>
                        <p className=''>Ethiopian Tour and Travel Website</p>
                    </div>
          </div>
          <div className=''>
              <nav className='flex flex-row gap-4  text-lg font-semibold max-lg:hidden '>
                <a href='/' className='lg:max-xl:hidden'>Home</a>
                <a href='/'>Type</a>
                <a href='/'>Country</a>
                <a href='/'>Packages</a>
                <a href='/'>Service</a>
                <a href='/'>AboutUs</a>
                <a href='/'>Blog</a>
                <a href='/'>Contact</a>
                <button className='px-8 bg-[#2cab81] py-1'><a href='/'>Login</a></button>

              </nav> 

              <button className='hidden max-lg:flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

             </button>


          </div>    
      
      </div>
     

    </div>
    
    
    }    
</div>
  )

}

export default Navbar