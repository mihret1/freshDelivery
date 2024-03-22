
// import img5 from '../../assets/h5.jpg'
import Navbar from "../../components/Navbar"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { IconButton } from "@mui/material";

import img1 from '../../assets/catagories/t2.jpg'
import img2 from '../../assets/catagories/t3.jpg'
import img3 from '../../assets/catagories/t6.jpg'
import img4 from '../../assets/catagories/t7.jpg'
import img5 from '../../assets/catagories/t9.jpg'
import img6 from '../../assets/catagories/t10.jpg'
import img7 from '../../assets/catagories/t13.png'
import img8 from '../../assets/catagories/t15.jpg'



function Home() {
  const [search,setSearch]=useState('')


  return (
  <div>
    {/* part one */}
    <div className='homee  h-[700px]  bg-no-repeat' >
        <div className="inner">
          <Navbar /> 
          <div >
        
            <div className="ml:w-[60%] flex flex-col gap-10 pt-10 pl-7 "> 
              <h1 className=' font-bold text-3xl '>
                      There`s a World of Trips Out There. Bring Us With You. Let`s Go.
              </h1>
              
              <div>
                <p className="text-xl font-medium pb-4">Travel can represent financial risk. No matter your destination, there’s always a chance you
                could face an unanticipated cancellation, interruption, mishap, or emergency.</p>
                
                <div className="flex gap-4"> 
                    <button className="px-10 py-2 rounded-full bg-[#408D65] text-white text-2xl font-medium border-[1px] border-black ">Trips</button>
                    <button className="px-7 py-2 rounded-full bg-black text-white text-2xl font-medium border-[1px] border-black">Packages</button>
                </div>   
              </div>
                
              <div className="text-xl font-bold h-24 ml:max-lg:w-[95%] px-3 w-[85%] max-md:w-[98%] search flex xs:max-sm:flex-col xs:max-sm:gap-1 xs:max-sm:h-28 xs:max-sm:justify-center xs:max-sm:items-center gap-5 items-center justify-center">
                        <div className=" bg-white h-12 w-[72%]  xs:max-xss:w-[99%] xss:max-sm:w-[92%] flex flex-row items-center justify-around">
                          <div>
                            {  !search && <SearchIcon />}
                            <input 
                              className="outline-none pl-2"
                              placeholder="search here"
                              value={search}
                              onChange={(e)=>setSearch(e.target.value)}
                            />
                          </div>
                          {search && <IconButton onClick={()=>setSearch('')}><CloseIcon /></IconButton> }
                        </div>
                          
                      <button className="bg-[#408D65] px-9 max-sm:px-5 xs:max-xss:px-2  text-white py-2 w-[25%] " >Search</button>
                        
                        
              </div>

            </div>  
      
          </div>    
       </div>
   </div>
   
   {/* part two */}
   <div className="flex flex-col gap-7 items-center pt-16 px-3  ">
    <h1 className=" text-3xl  font-semibold"> Visit Amazing Place in Ethiopia</h1>
    <div className="grid grid-cols-8 max-xss:grid-cols-3  xss:max-sm:grid-cols-4 sm:max-md:grid-cols-6 md:max-lg:grid-cols-7 ">
      
      <div > 
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Crafts
          <img src={img1} className="rounded-full w-24 h-24 "/>
        </a>
      </div>
      <div >
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Volcanos
          <img src={img2} className="rounded-full w-24 h-24 "/>
        </a>
      </div>
       <div >
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Parks
          <img src={img3} className="rounded-full w-24 h-24 "/>
        </a>
      </div>
       <div >
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Water Bodies
          <img src={img4} className="rounded-full w-24 h-24 "/>
        </a>
      </div>
       <div >
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Muesuem
          <img src={img5} className="rounded-full w-24 h-24 "/>
        </a>
      </div>
       <div >
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Churches
          <img src={img6} className="rounded-full w-24 h-24 "/>
        </a>
      </div>
       <div >
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Spa
          <img src={img7} className="rounded-full w-24 h-24 "/>
        </a>
      </div> 
      <div >
        <a href='/' className=" flex flex-col items-center text-xl font-semibold">
           Hotels
          <img src={img8} className="rounded-full w-24 h-24 "/>
        </a>
      </div>
    
    </div>

   </div>
  
   </div>
    )
}

export default Home