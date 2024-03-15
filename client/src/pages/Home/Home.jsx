
// import img5 from '../../assets/h5.jpg'
import Navbar from "../../components/Navbar"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { IconButton } from "@mui/material";

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
                
              <div className="text-xl font-bold h-24 ml:max-lg:w-[95%] w-[81%] max-md:w-[98%] search flex gap-5 items-center justify-center">
                        <div className=" bg-white h-12 w-[66%] flex flex-row items-center justify-around">
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
                          
                      <button className="bg-[#408D65] px-9  text-white py-2 w-[25%] " >Search</button>
                        
              </div>

            </div>  
      
          </div>    
       </div>
   </div>
   
   {/* part two */}
   <div className="h-[1000px]"></div>
  
   </div>
    )
}

export default Home